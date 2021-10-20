import styles from "./Item.module.scss";
import React, {useState} from "react";

type ItemType = {
    title: string
    module_1: string[]
    module_2: string[]
}

export const Item = ({title, module_1, module_2}: ItemType) => {
    const [openModule_1, setOpenModule_1] = useState(false)
    const [openModule_2, setOpenModule_2] = useState(false)

    return (
        <div className={styles.item}>
            <p className={styles.item__title}>{title}</p>
            <div className={styles.item__content}>
                {
                    module_1 && module_1.length !== 0 &&
                    <div
                        className={`${styles.item__module} ${openModule_1 && styles.item__module_active}`}
                        onClick={() => setOpenModule_1(!openModule_1)}
                    >
                        <p>1 модуль</p>
                        <ul>
                            {module_1.map(el => {
                                return <li>{el}</li>
                            })}
                        </ul>
                    </div>
                }
                {
                    module_2 && module_2.length !== 0 &&
                    <div
                        className={`${styles.item__module} ${openModule_2 && styles.item__module_active}`}
                        onClick={() => setOpenModule_2(!openModule_2)}
                    >
                        <p>2 модуль</p>
                        <ul>
                            {module_2.map(el => {
                                return <li>{el}</li>
                            })}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}