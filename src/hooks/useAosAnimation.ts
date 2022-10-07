import { useEffect, useState } from 'preact/hooks';
import uuid from 'uuid-random';

const useAosAnimation = () => {
    const [className, setClassName] = useState('');
    const [aosId] = useState(uuid());

    useEffect(() => {
        document.addEventListener(`aos:in:${aosId}`, () => {
            setClassName('aos-animate');
        });
    }, []);

    return [className, aosId];
};

export default useAosAnimation;
