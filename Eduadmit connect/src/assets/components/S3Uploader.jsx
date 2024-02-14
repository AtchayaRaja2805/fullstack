import AWS from 'aws-sdk';
import { useState } from 'react';

const S3Uploader = () => {
    const [data, setData] = useState(null);

    const config = {
        bucketName: "atchayanoodles",
        dirName: 'user-profiles/',
        region: "ap-south-1",
        accessKeyId: "YOUR_ACCESS_KEY_ID",
        secretAccessKey: "YOUR_SECRET_ACCESS_KEY"
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (!config.bucketName || !config.region || !config.accessKeyId || !config.secretAccessKey) {
            console.error("AWS CONFIGURATION IS INCOMPLETE");
            return;
        }

        AWS.config.update({
            accessKeyId: config.accessKeyId,
            secretAccessKey: config.secretAccessKey,
            region: config.region
        })

        // Create new Instance
        const S3 = new AWS.S3();

        // Having file in array Buffer
        const reader = new FileReader();

        reader.onload = () => {
            const fileBuffer = reader.result;
            S3.upload({
                Bucket: config.bucketName,
                Key: `${config.dirName}/${file.name}`,
                Body: fileBuffer,
                ACL: 'public-read',
                ContentType: file.type // Updated to file.type
            }, (err, uploadedData) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(uploadedData);
                    setData(uploadedData.Location);
                }
            })
        }
        reader.readAsArrayBuffer(file);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '20px' }}>
                {data && <img src={data} alt="uploaded Data" style={{ maxWidth: '200px' }} />}
            </div>
            <div>
                <input type="file" onChange={handleFileUpload} />
            </div>
        </div>
    );
}

export default S3Uploader;
