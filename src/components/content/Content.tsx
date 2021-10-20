import React from 'react';
import styles from './Content.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {Item} from './item/Item';
import {addItemsPage, ItemType} from "../../store/courses/coursesReducer";
import {Pagination} from "../common/pagination/Pagination";

export const Content: React.FC = () => {
    const dispatch = useDispatch()

    const countPage = useSelector<RootState, number>(state => state.courses.countPage)
    const totalCount = useSelector<RootState, number>(state => state.courses.countItems)
    const page = useSelector<RootState, ItemType[]>(state => state.courses.page)

    const chengePage = (value: number) => dispatch(addItemsPage(value))

    return (
        <main className={styles.content}>
            <h1 className={styles.content__title}>Специализированные дисциплины</h1>
                {
                    page.map(el => {
                        return (
                            <Item
                                key={el._id}
                                title={el.title}
                                module_1={el.module_1}
                                module_2={el.module_2}
                            />
                        )
                    })
                }
            <Pagination
                chengePage={chengePage}
                count={totalCount}
                countPage={countPage}
            />
        </main>
    )
}

