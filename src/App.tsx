import React, {useEffect} from 'react';
import {Content} from "./components/content/Content";
import {getItemsCourses} from "./store/courses/coursesReducer";
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "./components/common/loader/Loader";
import {RootState} from "./store/store";


export const App: React.FC = () => {
    const dispatch = useDispatch()
    const initApp = useSelector<RootState, boolean>(state => state.app.initApp)

    useEffect(() => {
        dispatch(getItemsCourses())
    }, [])


    return (
        <>
            {
                !initApp && <Loader/>
            }
            <div className={'container'}>
                <Content/>
            </div>
        </>

    )
}
