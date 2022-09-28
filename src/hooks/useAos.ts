import { useEffect } from 'preact/hooks';

const useAos = () => {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        window.AOS?.init({ once: true });
    }, []);
};

export default useAos;
