type DispatchFunction = (...args: any[]) => any;
type ActionCreatorsMapObject = { [actionCreator: string]: DispatchFunction };

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;
