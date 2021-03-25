import { useEffect } from "react";

type ICallback = (e: MouseEvent) => void;

export function useOutsideClick(callback: ICallback) {
    useEffect(() => {
        document.addEventListener('click', callback, true);
        return () => {
            document.removeEventListener('click', callback, true);
        };
    });
}