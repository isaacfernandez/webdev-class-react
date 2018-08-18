let initialState = {
    widgets: [],
    preview: false
};

const WidgetReducer = (state = initialState, action) => {
    let nState;

    switch (action.type) {

        case "FIND_ALL_WIDGETS_LESSON":
            nState = Object.assign({}, state);
            nState.widgets = action.widgets;
            return nState;


        case 'SAVE':
            console.log(action);
            console.log('attempting save with above action');
            fetch('https://wbdv-s2-1.herokuapp.com/api/lesson/' + action.id + '/widgets', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(state.widgets)
            });
            return state;

        case 'CREATE':
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: state.widgets.length + 1,
                        text: '',
                        title: '',
                        //widgetType: 'HEADING',
                        size: 1,
                        listType: 'unordered',
                        src: '',
                        href: '',
                        listItems: '',
                        ordering: state.widgets.length + 1
                    }
                ]
            };

        case 'UPDATE':
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.widget.id) {
                        return action.widget;
                    } else {
                        return widget
                    }
                })
            };

        case 'DELETE':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            };

        case 'PREVIEW':
            return {
                widgets: state.widgets,
                preview: !state.preview
            };

        default:
            return state;
    }

}

export default WidgetReducer;