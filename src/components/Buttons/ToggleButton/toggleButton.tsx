import './styles.css';

export const toggleButton: React.FC = () => {
    return (
        <>
            <label className="switch">
                <input type="checkbox"/>
                    <span className="slider"></span>
            </label>


            <label className="switch">
                <input type="checkbox"/>
                    <span className="slider round"></span>
            </label>

        </>
    );

}