import React, {useState} from "react";
import styles from "./Pagination.module.scss";
import arrow_icon from "../../../assets/arrow.svg"

type PaginationType = {
    chengePage: (value: number) => void
    count: number
    countPage: number
}
export const Pagination: React.FC<PaginationType> = ({chengePage, count, countPage}) => {
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(5)

    const chengePagination = (flag: boolean) => {
        if (flag) {
            setEnd(end + 5)
            setStart(start + 5)
            chengePage(start + 5 + 1)
        }
        else {
            setEnd(end - 5)
            setStart(start - 5)
            chengePage(start - 5 + 1)
        }
    }

    return (
        <div className={styles.pagination}>
            <button
                className={styles.pagination__item}
                disabled={start <= 0}
                onClick={() => chengePagination(false)}
            ><img src={arrow_icon} alt=" "/></button>
            {
                new Array(Math.ceil(count / 5)).fill(0).map((el, i) => {
                    return <div
                        className={`${styles.pagination__item} ${countPage === i + 1 && styles.pagination__item_active}`}
                        key={i}
                        onClick={() => chengePage(i + 1)}
                    >
                        <span>{i + 1}</span>
                    </div>
                }).slice(start, end)
            }
            <button
                className={styles.pagination__item}
                disabled={end >= count / 5}
                onClick={() => chengePagination(true)}
            ><img src={arrow_icon} alt=" "/></button>
        </div>
    )
}