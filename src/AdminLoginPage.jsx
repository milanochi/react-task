const Toast = ({ message, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, 3000); // Adjust the time as needed for how long you want the toast to be visible

        return () => clearTimeout(timer);
    }, [onClose]);

    return visible ? <div className="toast">{'Logged In'}</div> : null;
};

const HandleToast = () => {
    const [showToast, setShowToast] = useState(false);

    const handleSuccess = () => {
        // Perform your HTTP request and then show the toast
        // For example, use fetch or axios to make the request
        // Upon successful response, set `showToast` to true
        // You can customize the message and behavior based on your needs
        // For demonstration purposes, I'm just toggling the toast visibility
        setShowToast(true);
    };

    const handleCloseToast = () => {
        setShowToast(false);
    };

    return (
        <div>
            {/* Your component content goes here */}

            {showToast && <Toast message="Request successful!" onClose={handleCloseToast} />}
        </div>
    );
};

export default HandleToast;

