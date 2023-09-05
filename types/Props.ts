import { ReactNode } from "react";

export type PropsWithChildren<T extends {[k: keyof any]: any}> = T & {
    children: ReactNode | string | number;
}