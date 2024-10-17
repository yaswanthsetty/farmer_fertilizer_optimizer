import React from 'react';

function Idea1() {
    return (
        <div style={styles.container}>
            <section style={styles.headerSection}>
                <h1 style={styles.header}>Crop Rotation</h1>
            </section>

            <section style={styles.infoSection}>
                <img
                    src="https://tractorkarvan.com/storage/images/Blogs/Crop/Crop-Rotation-Blog_1.jpg"
                    alt="Crop Rotation"
                    style={styles.centeredImage}
                />
                <p style={styles.paragraph}>
                    Crop rotation is a farming practice where different types of crops are planted in the same field across seasons. It helps improve soil health, reduce the buildup of pests, and minimize the need for chemical fertilizers. By alternating crops, farmers can maintain soil fertility, break the cycle of pest and disease infestations, and increase the biodiversity of the soil.
                </p>
            </section>

            <section style={styles.benefitsSection}>
                <img
                    src="https://th.bing.com/th/id/R.9decdb4798d66a31d3d3c77c321c9a61?rik=d%2fWvZpmguwgBpg&riu=http%3a%2f%2fwww.greenfarmlive.com%2fassets%2fimages%2forganic-fertilizer.jpg&ehk=HgVP5SHn7cGfJG%2b%2fCWlqEPsHpqlWLAqTF%2bKytJ82R60%3d&risl=&pid=ImgRaw&r=0"
                    alt="Benefits of Crop Rotation"
                    style={styles.sectionImage}
                />
                <h2 style={styles.subheader}>Benefits of Crop Rotation</h2>
                <ul style={styles.list}>
                    <li>Improves soil structure and nutrient availability.</li>
                    <li>Reduces soil erosion and prevents nutrient depletion.</li>
                    <li>Breaks the life cycle of pests and diseases.</li>
                    <li>Enhances soil biodiversity and ecosystem resilience.</li>
                    <li>Reduces reliance on chemical fertilizers and pesticides.</li>
                </ul>
            </section>

            <section style={styles.examplesSection}>
                <img
                    src="https://2.bp.blogspot.com/-aQdISN2VVUY/W-SHdmlt6qI/AAAAAAAAACY/sKnA_lL8Vxcw76seaGqED-8WpUB7KWijQCLcBGAs/s1600/crop-rotation-.png"
                    alt="Examples of Crop Rotation"
                    style={styles.sectionImage}
                />
                <h2 style={styles.subheader}>Examples of Crop Rotation</h2>
                <p style={styles.paragraph}>
                    Crop rotation can involve a variety of different crop sequences. Here are a few examples:
                </p>
                <ul style={styles.list}>
                    <li><strong>Legume-Cereal Rotation:</strong> Plant legumes (e.g., peas, beans) followed by cereals (e.g., wheat, corn). Legumes fix nitrogen in the soil, benefiting the subsequent cereal crop.</li>
                    <li><strong>Root-Cereal Rotation:</strong> Plant root vegetables (e.g., carrots, potatoes) followed by cereals. This helps break disease cycles affecting root crops.</li>
                    <li><strong>Cover Crop Rotation:</strong> Plant cover crops (e.g., clover, rye) during the off-season to improve soil health and prevent erosion before planting main crops.</li>
                </ul>
            </section>

            <section style={styles.resourcesSection}>
                <h2 style={styles.subheader}>Further Reading and Resources</h2>
                <p style={styles.paragraph}>
                    For more information on crop rotation and its benefits, you can explore the following resources:
                </p>
                <ul style={styles.list}>
                    <li><a href="https://eos.com/blog/crop-rotation/" style={styles.link}>EOS - Crop Rotation Guide</a></li>
                    <li><a href="https://www.sare.org/publications/crop-rotation-on-organic-farms/a-crop-rotation-planning-procedure/" style={styles.link}>SARE Organization - Benefits of Crop Rotation</a></li>
                    <li><a href="https://www.ams.usda.gov/grades-standards/crop-rotation-practice-standard" style={styles.link}>USDA - Crop Rotation Practice Standard</a></li>
                </ul>
            </section>

            <button style={styles.button} onClick={() => window.history.back()}>Go Back</button>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
    },
    headerSection: {
        backgroundColor: '#2e8b57',
        padding: '20px',
        color: '#fff'
    },
    header: {
        fontSize: '2.5em',
        margin: '0'
    },
    infoSection: {
        backgroundColor: '#f0f8f0',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    },
    benefitsSection: {
        backgroundColor: '#eaf9e8',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginTop: '20px'
    },
    examplesSection: {
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginTop: '20px'
    },
    resourcesSection: {
        backgroundColor: '#dff0d8',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginTop: '20px'
    },
    image: {
        width: '100%',
        maxWidth: '500px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        marginTop: '20px'
    },
    centeredImage: {
        width: '100%',
        maxWidth: '600px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'block',
        margin: '20px auto'
    },
    sectionImage: {
        width: '100%',
        maxWidth: '400px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'block',
        margin: '20px auto'
    },
    paragraph: {
        fontSize: '1.2em',
        marginTop: '20px',
        lineHeight: '1.6'
    },
    subheader: {
        fontSize: '1.8em',
        color: '#2e8b57',
        margin: '0 0 10px 0'
    },
    list: {
        listStyleType: 'disc',
        paddingLeft: '20px',
        fontSize: '1.1em',
        textAlign: 'left'
    },
    link: {
        color: '#2e8b57',
        textDecoration: 'none'
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#2e8b57',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
        fontSize: '1.1em'
    },
};

export default Idea1;