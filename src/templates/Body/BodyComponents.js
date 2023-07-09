import Body0 from './body0';
import Body1 from './body1';
import Body2 from './body2';
import Body3 from './body3';
import Body4 from './body4';

export default function BodyComponents({randomIndex}) {
    const components = [
        <Body0 />,
        <Body1 />,
        <Body2 />,
        <Body3 />,
        <Body4 />,
    ];

    return (
        components[randomIndex]
    );
}