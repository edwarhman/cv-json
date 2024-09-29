import { useState, type ChangeEvent, type InputHTMLAttributes } from "react";
import DottedBox from "../BigButton/BigButton";
import styles from './uploadImage.module.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

export default function UploadImage({
    ...props
}: Props) {
    const [image, setImage] = useState<string | null>(null)

    const styleLoaded = image ? styles.loaded : null

    function onChange(e: ChangeEvent<HTMLInputElement>): void {
        const file = e.target.files?.[0]
        if (!file) return

        setImage(URL.createObjectURL(file))

        props.onChange?.(e)

    }




    return (
        <DottedBox>
            <div className={`${styles.profileImageWrapper} ${styleLoaded}`}>
                {
                    image
                        ? <img src={image} alt='profile-image' className={styles.profileImage} />
                        : 'upload image'

                }
                <input
                    {...props}
                    type='file'
                    accept='image/*'
                    onChange={onChange}
                />
            </div>
        </DottedBox>
    )
}