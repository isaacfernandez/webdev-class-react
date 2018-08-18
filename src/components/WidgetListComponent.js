import React from 'react'
import {HeadingWidget, ImageWidget, LinkWidget, ListWidget, ParagraphWidget} from "./widgets/Widgets";

//Adapted from jannunzi/webdev-summer2-2018

export default class WidgetListComponent extends React.Component {


    componentWillReceiveProps(newProps) {
        if (this.props.lessonId !== newProps.lessonId) {
            this.props.findAllWidgetsForLesson(newProps.lessonId);
        }
    }

    render() {
        if (this.props.lessonId === undefined) {
            return null;
        }
        return (
            <div className="pull-right">
                <button onClick={() => this.props.flipPreview()}
                        className="btn btn-secondary float-right">Edit Mode
                </button>
                <button onClick={() => this.props.saveWidgets(this.props.lessonId, this.props.widgets)}
                        className="btn btn-primary float-right">Save
                </button>
                <div className="-align-center">
                    <div>
                        <h3 className="pull-right"></h3>
                    </div>
                </div>
                <h3>Widgets</h3>
                <ul className="list-group">
                    <button
                        onClick={() => {
                            this.props.createWidget()
                        }}
                        className="btn btn-primary"
                        hidden={this.props.preview}>Add Widget
                    </button>
                    {this.props.widgets.map((widget, ord) => {
                        let newType;
                        widget.ordering = ord;
                        return (
                            <li key={ord}
                                className="list-group-item">
                                <div hidden={this.props.preview}>
                                    <button className="pull-right btn btn-danger"
                                            onClick={() => this.props.deleteWidget(widget.id)}>
                                        <i className="fa fa-times"></i>
                                    </button>
                                    <select id="widget-dropdown"
                                            value={widget.type}
                                            ref={node => newType = node}
                                            onChange={() => {
                                                widget.type = newType.value;
                                                this.props.updateWidget(widget);
                                            }}
                                            className="form-control float-right ">
                                        <option value=""> select a widget type</option>
                                        <option value="Heading">Heading</option>
                                        <option value="Paragraph">Paragraph</option>
                                        <option value="Image">Image</option>
                                        <option value="Link">Link</option>
                                        <option value="List">List</option>
                                    </select>
                                </div>
                                <div>
                                    {widget.type === 'Heading' && <HeadingWidget widget={widget}
                                                                                 preview={this.props.preview}
                                                                                 updateWidget={this.props.updateWidget}/>}
                                    {widget.type === 'Paragraph' && <ParagraphWidget widget={widget}
                                                                                     preview={this.props.preview}
                                                                                     updateWidget={this.props.updateWidget}/>}
                                    {widget.type === 'Image' && <ImageWidget widget={widget}
                                                                             preview={this.props.preview}
                                                                             updateWidget={this.props.updateWidget}/>}
                                    {widget.type === 'List' && <ListWidget widget={widget}
                                                                           updateWidget={this.props.updateWidget}
                                                                           preview={this.props.preview}/>}
                                    {widget.type === 'Link' && <LinkWidget widget={widget}
                                                                           preview={this.props.preview}
                                                                           updateWidget={this.props.updateWidget}/>}
                                </div>
                            </li>)
                    })}
                </ul>
            </div>
        )
    }
}