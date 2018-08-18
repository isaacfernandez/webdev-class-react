import React from 'react'

export const HeadingWidget = ({widget, updateWidget, preview}) => {

    let text;
    let size;
    let name;

    return (
        <div>

            <h3 hidden={preview}>Heading{widget.title}</h3>

            <div hidden={preview}>

                <label htmlFor="text">Heading Text</label>

                <input ref={node => text = node}
                       onChange={() => {
                           widget.text = text.value;
                           updateWidget(widget)
                       }}
                       className="form-control"
                       placeholder="Heading text"
                       id="text"
                       value={widget.text}/>

                <label htmlFor="size">Heading Size</label>

                <select onChange={() => {
                    widget.size = parseInt(size.value);
                    updateWidget(widget)
                }}
                        ref={node => size = node}
                        className="form-control"
                        value={widget.size}
                        id="size">
                    <option value='1'>Heading 1</option>
                    <option value='2'>Heading 2</option>
                    <option value='3'>Heading 3</option>
                </select>

                <label htmlFor="name">Widget Name</label>

                <input onChange={() => {
                    widget.title = name.value;
                    updateWidget(widget)
                }}
                       ref={node => name = node}
                       className="form-control"
                       placeholder="Widget name"
                       value={widget.title}
                       id="name"/>

                <h4 hidden={preview}>Preview</h4>

            </div>

            {widget.size === 1 && <h1>{widget.text}</h1>}
            {widget.size === 2 && <h2>{widget.text}</h2>}
            {widget.size === 3 && <h3>{widget.text}</h3>}

        </div>
    )
}

export const ParagraphWidget = ({widget, updateWidget, preview}) => {
    let text;
    let name;
    return (
        <div>
            <h3 hidden={preview}>Paragraph</h3>
            <h4>{widget.title}</h4>
            <div hidden={preview}>
                <label htmlFor="paragraph-text">Paragraph text</label>
                <textarea ref={node => text = node}
                          className="form-control"
                          placeholder="Paragraph text"
                          id="paragraph-text"
                          onChange={() => {
                              widget.text = text.value;
                              updateWidget(widget);
                          }}
                          value={widget.text}></textarea>
                <label className="margin-top" htmlFor="paragraph-name">Widget name</label>
                <input onChange={() => {
                    widget.title = name.value;
                    updateWidget(widget)
                }}
                       ref={node => name = node}
                       className="form-control"
                       placeholder="Widget name"
                       value={widget.title}
                       id="paragraph-name"/>
                <h4 className="margin-top">Preview</h4>
            </div>
            {widget.text}
        </div>
    )
}


export const LinkWidget = ({widget, updateWidget, preview}) => {
    let text
    let href
    let name
    return (
        <div>
            <h3 hidden={preview}>Link</h3>
            <h4>{widget.title}</h4>
            <div hidden={preview}>
                <label htmlFor="link-text">Link text</label>
                <input ref={node => text = node}
                       className="form-control"
                       placeholder="Link text"
                       id="link-text"
                       value={widget.text}
                       onChange={() => {
                           widget.text = text.value;
                           updateWidget(widget)
                       }}></input>
                <label className="margin-top" htmlFor="link-url">Link URL</label>
                <input ref={node => href = node}
                       className="form-control"
                       placeholder="Link URL"
                       value={widget.href}
                       id="link-url"
                       onChange={() => {
                           widget.href = href.value;
                           updateWidget(widget)
                       }}></input>
                <label className="margin-top" htmlFor="link-name">Widget name</label>
                <input onChange={() => {
                    widget.title = name.value;
                    updateWidget(widget)
                }}
                       ref={node => name = node}
                       className="form-control"
                       placeholder="Widget name"
                       value={widget.name}
                       id="link-name"/>
                <h4 className="margin-top">Preview</h4>
            </div>
            <a href={widget.href}>{widget.text}</a>
        </div>
    )
}

export const ImageWidget = ({widget, updateWidget, preview}) => {
    let src
    let name
    return (
        <div>
            <h3 hidden={preview}>Image</h3>
            <h4>{widget.title}</h4>
            <div hidden={preview}>
                <label htmlFor="image-url">direct link to image</label>
                <input ref={node => src = node}
                       className="form-control"
                       placeholder="Image URL"
                       id="image-url"
                       value={widget.src}
                       onChange={() => {
                           widget.src = src.value;
                           updateWidget(widget)
                       }}></input>
                <label htmlFor="image-name">Widget name</label>
                <input onChange={() => {
                    widget.title = name.value;
                    updateWidget(widget)
                }}
                       ref={node => name = node}
                       className="form-control"
                       placeholder="Widget name"
                       value={widget.title}
                       id="image-name"/>
                <h4 hidden={preview}>Preview</h4>
            </div>
            <img src={widget.src} className="img-fluid"/>
        </div>
    )
}


export const ListWidget = ({widget, updateWidget, preview}) => {
    let text
    let type
    let name

    return (
        <div>
            <h3>List</h3>
            <h4>{widget.title}</h4>
            <div hidden={preview}>
                <label htmlFor="list-text">List</label>
                <textarea ref={node => text = node}
                          className="form-control"
                          placeholder="LINE ITEM"
                          onChange={() => {
                              widget.listItems = text.value;
                              updateWidget(widget)
                          }}
                          value={widget.listItems || ''}
                          id="list-text">
            </textarea>
                <label htmlFor="listType">List type</label>
                <select ref={node => type = node}
                        className="form-control"
                        id="listType"
                        value={widget.listType}
                        onChange={() => {
                            widget.listType = type.value
                            updateWidget(widget)
                        }}>
                    <option value="ul">Unordered</option>
                    <option value="ol">Ordered</option>
                </select>
                <label htmlFor="list-name">Name</label>
                <input onChange={() => {
                    widget.title = name.value;
                    updateWidget(widget)
                }}
                       ref={node => name = node}
                       className="form-control"
                       placeholder="Widget name"
                       value={widget.title}
                       id="list-name"/>
                <h4 className="margin-top">Preview</h4>
            </div>
            {widget.listType === "ul" && widget.listItems !== '' &&
            <ul>
                {widget.listItems.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            }
            {widget.listType === "ol" && widget.listItems !== '' &&
            <ol>
                {widget.listItems.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
            }
        </div>
    )
}