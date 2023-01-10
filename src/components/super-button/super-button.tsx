import './super-button.scss';

export interface SuperButtonProps {
    // button label
    label: string;

    // icon URL
    icon?: string;

    // is icon prefix (default) or postfix?
    prefixIcon?: boolean;
}

export default function SuperButton({label}: SuperButtonProps) {

    return (
        <button className="super-button">
            <span className="label">{label}</span>
        </button>
    );
}
