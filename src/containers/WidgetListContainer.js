import {connect} from 'react-redux'
import WidgetListComponent from '../components/WidgetListComponent'

const stateToPropertyMapper = state =>(
    {
        widgets: state.widgets,
        preview: state.preview
    }
)

const dispatcherToPropertyMapper = dispatch => (
    {
        findAllWidgetsForLesson: (lessonId) => {
            fetch('https://wbdv-s2-1.herokuapp.com/api/lesson/'+lessonId+'/widget')
                .then(response => (response.json()))
                .then(widgets => dispatch({
                    type: 'FIND_ALL_WIDGETS_LESSON',
                    widgets: widgets
                }) )
        },
        deleteWidget: wid => dispatch({
            type: 'DELETE',
            widgetId: wid
        }),
        createWidget: w => dispatch({
            type: 'CREATE',
            widget: w
        }),
        updateWidget: w => dispatch({
            type: 'UPDATE',
            widget: w
        }),
        flipPreview: w => dispatch({
            type: 'PREVIEW'
        }),
        saveWidgets: (lessonId, w) => dispatch({
            type: 'SAVE',
            id: lessonId,
            widgets: w
        })
    }
)

const WidgetListContainer =
    connect(stateToPropertyMapper,dispatcherToPropertyMapper)(WidgetListComponent)

export default WidgetListContainer;