import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export type Scheme = 'light' | 'dark';

const useScheme = () => {
    const [scheme, setScheme] = useState<Scheme>('light');

    useEffect(() => {
        const preferredScheme =
            window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        setScheme(preferredScheme);
    }, []);

    const handleChangeScheme = (scheme: Scheme) => setScheme(scheme);

    return { scheme, handleChangeScheme };
};

export default useScheme;
