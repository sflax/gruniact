import './super-button.scss';

export interface SuperButtonProps {
    // button label
    label: string;

    // icon URL
    icon?: string;

    // is icon prefix (default) or postfix?
    postfixIcon?: boolean;
}


// <SuperButton label="test" icon="..." prefixIcon="false" />
/*********************************
 *  (pre-icon) label (post-icon) *
 *********************************/

export default function SuperButton({label, icon, postfixIcon}: SuperButtonProps) {
    const iconTemplate = icon ? <span className="icon"><img src={icon} /></span> : undefined;

    return (
        <button className="super-button">
            {iconTemplate && !postfixIcon ? iconTemplate : ''}
            <span className="label">{label}</span>
            {iconTemplate && postfixIcon ? iconTemplate : ''}
        </button>
    );
}
