import Header0 from './header0';
import Header1 from './header1';
import Header2 from './header2';
import Header3 from './header3';
import Header4 from './header4';

export default function HeaderComponents({randomIndex}) {
    const components = [
        <Header0 />,
        <Header1 />,
        <Header2 />,
        <Header3 />,
        <Header4 />,
    ];

    return (
        components[randomIndex]
    );
}