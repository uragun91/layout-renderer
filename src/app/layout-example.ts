import { ILayout } from './layout.types';

const builtInFunctions = {
  getForLoopCurrentIndex: 'GET_FOR_LOOP_CURRENT_ELEMENT_INDEX',
  getForLoopCurrentElement: 'GET_FOR_LOOP_CURRENT_ELEMENT',
  len: 'LEN', // If you pass string it will return the length of string, if you pass array it will return the array length
};

export const baseLayoutExample: ILayout = {
  params: {},
  children: [
    {
      id: 'jk4j3n5jk3n',
      type: 'container',
      children: [
        {
          id: 'h312c2e178',
          type: 'text',
          value: 'Some text',
          when: 'LEN()',
        },
        {
          id: 'h312c2e1asdnkn',
          type: 'text',
          value: 'Another text',
        },
        {
          id: 'hjb4b32h4j324',
          type: 'h1',
          value: 'Hello Title',
          style: {
            'background-color': 'green',
            margin: '20px 0',
            'text-align': 'center',
          },
        },
        {
          id: 'j6j56kj46jk45n6kj54',
          type: 'container',
          style: {
            'background-color': 'blue',
            display: 'flex',
            'justify-content': 'space-between',
            margin: '20px 0',
          },
          children: [
            {
              id: 'hkj36h4kj6jk54',
              type: 'button',
              children: [
                {
                  id: '234mjkk23',
                  type: 'text',
                  value: 'Ahahahahah',
                },
              ],
            },
            {
              id: 'kjlkj543',
              type: 'button',
              children: [
                {
                  id: 'jkjljkj',
                  type: 'text',
                  value: 'Ahahahahah',
                },
              ],
            },
            {
              id: '54645klkl',
              type: 'button',
              children: [
                {
                  id: 'hj4k2h3kj4',
                  type: 'text',
                  value: 'Ahahahahah',
                },
              ],
            },
            {
              id: 'kjlk3jkjl54345',
              type: 'button',
              children: [
                {
                  id: 'uh132hkj12h3',
                  type: 'text',
                  value: 'Ahahahahah',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
