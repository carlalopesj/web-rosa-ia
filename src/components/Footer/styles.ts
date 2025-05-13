export const styles = {
    container: {
        backgroundColor: '#40153d',
        color: '#ffffff',
        padding: '60px 20px 30px',
        fontFamily: "'Arial', sans-serif",
    },
    content: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column' as const,
    },
    infoBox: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px',
        marginBottom: '40px',
    },
    infoItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '20px',
        padding: '20px',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        ':hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transform: 'translateY(-5px)',
        }
    },
    iconLoc: {
        fontSize: '50px',
        color: '#f8a5c2',
        flexShrink: 0,
    },
    icon: {
        fontSize: '30px',
        color: '#f8a5c2',
        flexShrink: 0,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '8px',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '0',
        color: '#f8a5c2',
    },
    text: {
        fontSize: '16px',
        margin: '0',
        lineHeight: '1.5',
    },
    link: {
        color: '#ffffff',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        ':hover': {
            color: '#f8a5c2',
            textDecoration: 'underline',
        }
    },
    divider: {
        height: '1px',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        margin: '30px 0',
    },
    bottom: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap' as const,
        gap: '20px',
    },
    copyright: {
        fontSize: '14px',
        opacity: 0.8,
    },
    socialLinks: {
        display: 'flex',
        gap: '15px',
    },
    socialIcon: {
        color: '#ffffff',
        fontSize: '20px',
        transition: 'color 0.3s ease',
        ':hover': {
            color: '#f8a5c2',
        }
    }
};