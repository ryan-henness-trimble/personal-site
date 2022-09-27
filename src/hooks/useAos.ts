import { useEffect } from 'preact/hooks';

const useAos = () => {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        window.AOS?.init();
    }, []);
};

export default useAos;
