export type DeepPartial<T> = {
    [Property in keyof T]?: DeepPartial<T[Property]>
}