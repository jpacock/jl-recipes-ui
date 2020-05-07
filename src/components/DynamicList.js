import React from 'react';

import { Box, Button, Flex } from 'rebass';
import { Input } from '@rebass/forms';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import uuid from 'uuid/v4'

const initialData = {
    column: {
        id: 'column-1',
        numberIds: ['four', 'one', 'five', 'three', 'two'],
    },
    numbers: {
        'five': { id: 'five', content: '5' },
        'four': { id: 'four', content: '4' },
        'one': { id: 'one', content: '1' },
        'three': { id: 'three', content: '3' },
        'two': { id: 'two', content: '2' },
    }
};

class DynamicList extends React.Component {
    constructor() {
        super();
        this.onDragEnd = this.onDragEnd.bind(this);
        this.state= {initialData};
    }

    onDragEnd(result){
        // the item was dropped
        console.log('item dropped')
    }
    render() {
        const list = this.props.list.map(item => {
            return (
                <Draggable>
                    <Flex p={1}>
                        <Input m={1} value={item}></Input>
                        <Button m={1} >Remove</Button>
                    </Flex>
                </Draggable>

            )
        })
        return (
            <DragDropContext onDropEnd={result => console.log(result)}>
                <Droppable droppableId={uuid()}>
                    {(provided) => (
                        <div style={{
                            background: 'lightGray',
                            minHeight: 500,
                            width:250
                        }}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            {...provided.droppablePlaceholder}>
                            <Draggable draggableId={uuid()} index={1}>
                                {(provided) => (
                                    <div style={
                                        {
                                            background: 'white',
                                            minHeight: 20,
                                        }} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <p>1</p>
                                    </div>
                                )}
                            </Draggable>
                            <Draggable draggableId={uuid()} index={1}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <p>2</p>
                                    </div>
                                )}
                            </Draggable>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
    }
}

export default DynamicList;