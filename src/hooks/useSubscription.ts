import { ApolloClient, ApolloError, OperationVariables, SubscriptionOptions } from "apollo-client";
import { useEffect, useRef, useState } from "react";
import { Omit } from "react-router";
import { useApolloClient } from "react-apollo-hooks";
import { DocumentNode } from "apollo-link";

export type OnSubscriptionData<TData> = (options: OnSubscriptionDataOptions<TData>) => any;

export interface OnSubscriptionDataOptions<TData> {
	client: ApolloClient<any>;
	subscriptionData: SubscriptionHookResult<TData>;
}

export interface SubscriptionHookOptions<TData, TVariables> extends Omit<SubscriptionOptions<TVariables>, "query"> {
	shouldResubscribe?: any;
	onSubscriptionData?: OnSubscriptionData<TData>;
}

export interface SubscriptionHookResult<TData> {
	data?: TData;
	error?: ApolloError;
	loading: boolean;
}

export function useSubscription<TData = any, TVariables = OperationVariables>(
	query: DocumentNode,
	options?: SubscriptionHookOptions<TData, TVariables>
): SubscriptionHookResult<TData> {
	const prevOptions = useRef<null | SubscriptionHookOptions<TData, TVariables>>(null);
	const onSubscriptionData = useRef<null | OnSubscriptionData<TData>>(null);
	const client = useApolloClient();
	const [result, setResult] = useState<SubscriptionHookResult<TData>>({
		loading: true,
	});

	if (options) {
		onSubscriptionData.current = options.onSubscriptionData || null;
	}

	useEffect(() => {
		if (options) {
			prevOptions.current = options;
		}
		if (!client) return;
		const subscription = client
			.subscribe({
				...options,
				query,
			})
			.subscribe({
				error: (error) => {
					setResult({ loading: false, data: result.data, error });
				},
				next: (nextResult) => {
					const newResult = {
						data: nextResult.data,
						error: undefined,
						loading: false,
					};
					setResult(newResult);
					if (onSubscriptionData.current) {
						onSubscriptionData.current({ client, subscriptionData: newResult });
					}
				},
			});
		return () => {
			subscription.unsubscribe();
		};
	}, []);

	return result;
}
