import { useCallback, useEffect, useState } from 'preact/hooks';
import debounce from 'lodash.debounce';

const useResponsiveTabs = (tabs: { id: string; display: string }[]) => {
    const [currentTabId, setCurrentTabId] = useState<string>(tabs[0].id);
    const [lastWindowScrollY, setLastWindowScrollY] = useState(window.scrollY);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [shouldUpdateTabOnScroll, setShouldUpdateTabOnScroll] = useState(true);

    const handleTabClick = (id: string) => {
        setCurrentTabId(id);
        setShouldUpdateTabOnScroll(false);
        window.scrollTo({
            top: getAbsoluteTabScrollOffset(id) - 150,
            behavior: 'smooth',
        });
    };

    const updateCurrentTab = useCallback(() => {
        const navbarOffset = getTabScrollOffset('nav') - 300;
        tabs.forEach((tab) => {
            if (getTabScrollOffset(tab.id) - navbarOffset < 550) {
                setCurrentTabId(tab.id);
            }
        });
    }, [tabs, setCurrentTabId]);

    const handleTabUpdate = useCallback(() => {
        if (shouldUpdateTabOnScroll) {
            updateCurrentTab();
        } else {
            setShouldUpdateTabOnScroll(lastWindowScrollY === window.scrollY);
        }
    }, [shouldUpdateTabOnScroll, lastWindowScrollY, updateCurrentTab]);

    const handleWindowScroll = useCallback(() => {
        setHasScrolled(window.scrollY > 200);
        setLastWindowScrollY(window.scrollY);
        if (shouldUpdateTabOnScroll) {
            handleTabUpdate();
        }
    }, [handleTabUpdate, shouldUpdateTabOnScroll]);

    useEffect(() => {
        if (shouldUpdateTabOnScroll) {
            window.addEventListener('scroll', debounce(handleWindowScroll, 100));
        }

        return () => {
            if (shouldUpdateTabOnScroll) {
                window.removeEventListener('scroll', debounce(handleWindowScroll, 100));
            }
        };
    }, [handleWindowScroll, shouldUpdateTabOnScroll]);

    return { currentTabId, hasScrolled, handleTabClick };
};

export default useResponsiveTabs;

const getAbsoluteTabScrollOffset = (tabId: string) => {
    const bodyRect = document.body.getBoundingClientRect();
    const tabRect = document.querySelector(`#${tabId}`)?.getBoundingClientRect();

    return tabRect ? tabRect?.top - bodyRect.top : 0;
};

const getTabScrollOffset = (tabId: string) => {
    const tabRect = document.querySelector(`#${tabId}`)?.getBoundingClientRect();

    return tabRect ? tabRect?.top : 0;
};
