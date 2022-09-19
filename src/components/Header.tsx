import { h, Fragment } from 'preact';
import { useEffect, useState, useCallback } from 'preact/hooks';
import styled from 'styled-components';

interface Props {
    currentTabId: string;
    onSetTab: (tabId: string) => void;
    tabs: { id: string; display: string }[];
}

const Header = (props: Props): JSX.Element => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleWindowScroll);

        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        };
    }, []);

    const handleTabChange = (tabId: string) => {
        const offset = getAbsoluteTabScrollOffset(tabId);
        window.scrollTo({
            top: offset,
            behavior: 'smooth',
        });
        props.onSetTab(tabId);
    };

    const getAbsoluteTabScrollOffset = (tabId: string) => {
        const bodyRect = document.body.getBoundingClientRect();
        const tabRect = document.querySelector(`#${tabId}`)?.getBoundingClientRect();

        return tabRect ? tabRect?.top - bodyRect.top - 200 : 0;
    };

    const getTabScrollOffset = (tabId: string) => {
        const tabRect = document.querySelector(`#${tabId}`)?.getBoundingClientRect();

        return tabRect ? tabRect?.top - 200 : 0;
    };

    const updateCurrentTab = useCallback(() => {
        const navbarOffset = getTabScrollOffset('nav');
        props.tabs.forEach((tab) => {
            if (getTabScrollOffset(tab.id) - navbarOffset < 250) {
                props.onSetTab(tab.id);
            }
        });
    }, [props.tabs, props.onSetTab, getTabScrollOffset]);

    const handleWindowScroll = useCallback(() => {
        setScrolled(window.scrollY > 200);
        updateCurrentTab();
    }, [setScrolled, updateCurrentTab]);

    return (
        <Fragment>
            <Socials>
                <Icon src="assets/icons/icon_github.png" onClick={() => window.open('https://github.com/ryan-henness-trimble')} />
                    <Icon src="assets/icons/icon_linkedin.png" onClick={() => window.open('https://www.linkedin.com/in/ryan-henness')} />
            </Socials>
            <HeadshotContainer>
                <Headshot src="assets/headshot.png" />
            </HeadshotContainer>
            <Name>Ryan Henness</Name>
            <Navbar id="nav" showShadow={scrolled}>
                {props.tabs.map((tab) => (
                    <Button isActive={tab.id === props.currentTabId} key={tab.id} onClick={() => handleTabChange(tab.id)}>
                        {tab.display}
                    </Button>
                ))}
            </Navbar>
        </Fragment>
    );
};

export default Header;

const Socials = styled.div`
    align-items: center;
    background-color: white;
    display: flex;
    justify-content: flex-end;
    height: 2.25rem;
    position: sticky;
    top: 0;
    width: 100%;
`;

const Icon = styled.img`
    border-radius: 50%;
    cursor: pointer;
    height: var(--rem-24px);
    margin: 0 var(--rem-2px);
    padding: var(--rem-4px);
    width: var(--rem-24px);

    &:hover {
        background-color: #f6f6f6;
    }

    &:active {
        background-color: #eeeeee;
    }
`;

const HeadshotContainer = styled.div`
    background-color: white;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
`;

const Headshot = styled.img`
    border-radius: 50%;
    box-shadow: 0px 5px 28px 1px rgba(0, 0, 0, 0.25);
    height: ${(props) => (props.hide ? '30px' : '200px')};
    margin-bottom: var(--rem-8px);
    transition: height 0.3s ease-in, width 0.3s ease-in;
    width: ${(props) => (props.hide ? '0px' : '200px')};
    z-index: 2;
`;

const Name = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    font-family: 'Roboto Flex', sans-serif;
    font-size: 54px;
    font-weight: 700;
    padding-bottom: var(--rem-16px);
    position: sticky;
    text-transform: uppercase;
    top: 36px;
    z-index: 1;
`;

const Navbar = styled.div<{ showShadow?: boolean }>`
    background-color: white;
    box-shadow: ${(props) => (props.showShadow ? '0px 5px 28px 1px rgba(0, 0, 0, 0.06)' : 'none')};
    display: flex;
    justify-content: center;
    padding-bottom: var(--rem-24px);
    position: sticky;
    top: 115px;
    transition: box-shadow 0.3s ease-in, width 0.3s ease-in;
`;

const Button = styled.div<{ isActive?: boolean }>`
    background-color: ${(props) => (props.isActive ? '#EBEBEB' : 'transparent')};
    border-radius: var(--rem-16px);
    cursor: pointer;
    font-size: 18px;
    margin: 0 var(--rem-4px);
    padding: var(--rem-4px) var(--rem-14px);
    transition: background-color 0.3s ease-in;
    user-select: none;

    &:hover {
        background-color: #f6f6f6;
        transition: background-color 0.1s ease-in;
    }

    &:active {
        background-color: #eeeeee;
        transition: background-color 0.1s ease-in;
    }
`;
