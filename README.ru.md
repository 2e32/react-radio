# @2e32/react-radio

[English (en)](README.md)

React радиокнопка.

## Установка

npm

```bash
npm i @2e32/react-radio
```

yarn

```bash
yarn add @2e32/react-radio
```

## Использование Radio

App.js

```javascript
// Единожды подключить стиль на уровне приложения (точки входа)
import '@2e32/react-radio/css';

const App = () => <Page />;

export default App;
```

Page.js

```javascript
import { useState, useCallback } from 'react';
// Импортировать компонент
import Radio from '@2e32/react-radio';

const Page = () => {
  const [value, setValue] = useState<string>();

  return (
    <Radio checked={value === 'one'} value="one" onChange={setValue}>
      One
    </Radio>
    <Radio checked={value === 'two'} value="two" onChange={setValue}>
      Two
    </Radio>
  );
};

export default Page;
```

## Свойства Radio

<table>
  <thead>
    <tr>
      <th>Название</th>
      <th>Тип</th>
      <th>Значение по умолчанию</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ref</td>
      <td>
        <code>React.Ref&lt;HTMLSpanElement&gt;</code>
      </td>
      <td></td>
      <td>Ссылка для доступа к DOM-узлу компонента.</td>
    </tr>
    <tr>
      <td>id</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>Идентификатор элемента в документе.</td>
    </tr>
    <tr>
      <td>name</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>Имя элемента.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>
        <code>T</code>
      </td>
      <td></td>
      <td>Значение элемента формы.</td>
    </tr>
    <tr>
      <td>checked</td>
      <td>
        <code>boolean</code>
      </td>
      <td></td>
      <td>
        Значение, указывающее отмечен ли элемент управления меткой. При значении <code>true</code> метка
        установлена, в противном случае - не установлена.
      </td>
    </tr>
    <tr>
      <td>children</td>
      <td>
        <code>React.ReactNode</code>
      </td>
      <td></td>
      <td>Содержимое связанное с радиокнопкой (текстовая подпись).</td>
    </tr>
    <tr>
      <td>hint</td>
      <td>
        <code>React.ReactNode</code>
      </td>
      <td></td>
      <td>Подсказка.</td>
    </tr>
    <tr>
      <td>className</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>CSS-класс.</td>
    </tr>
    <tr>
      <td>style</td>
      <td>
        <code>React.CSSProperties</code>
      </td>
      <td></td>
      <td>Стиль.</td>
    </tr>
    <tr>
      <td>boxClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>CSS-класс контейнера, в котором располагается метка.</td>
    </tr>
    <tr>
      <td>inputClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>CSS-класс элемента input.</td>
    </tr>
    <tr>
      <td>labelClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>CSS-класс контейнера, в котором располагается текст.</td>
    </tr>
    <tr>
      <td>hintClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>CSS-класс hint.</td>
    </tr>
    <tr>
      <td>checkmarkPosition</td>
      <td>
        <code>'left' | 'right' | 'top' | 'bottom'</code>
      </td>
      <td>
        <code>'left'</code>
      </td>
      <td>
        Позиция отображения метки относительно контента радиокнопки.
      </td>
    </tr>
    <tr>
      <td>checkmarkAlign</td>
      <td>
        <code>'start' | 'center' | 'end'</code>
      </td>
      <td>
        <code>'center'</code>
      </td>
      <td>Выравнивание метки относительно контента радиокнопки.</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Компонент отключен (метка не может быть выбрана, получение фокуса запрещено).</td>
    </tr>
    <tr>
      <td>readOnly</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Компонент только на чтение (состояние метки не может быть изменено).</td>
    </tr>
    <tr>
      <td>autoFocus</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Компонент должен находится в фокусе при монтировании.</td>
    </tr>
    <tr>
      <td>block</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Компонент занимает всю ширину контейнера.</td>
    </tr>
    <tr>
      <td>tabIndex</td>
      <td>
        <code>number</code>
      </td>
      <td>
        <code>0</code>
      </td>
      <td>Значение для настройки фокуса элемента.</td>
    </tr>
    <tr>
      <td>renderIcon</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>
        Отображает иконку радиокнопки.
        <br />
        <br />
        ⚠️ Используйте этот метод для собственной стилизации метки.
        <br />
        <br />
        <code>(props: RenderIconProps&lt;T&gt;) => React.ReactNode</code>
      </td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>
        Вызывается при выборе значения.
        <br />
        <br />
        <code>
          (value: NonNullable&lt;T&gt;, event: React.ChangeEvent&lt;HTMLInputElement&gt;) => void
        </code>
      </td>
    </tr>
  </tbody>
</table>

## Использование RadioGroup

```javascript
import { useState } from 'react';
import Radio from '@2e32/react-radio';

const Page = () => {
  const [value, setValue] = useState<string>();

  return (
    <Radio.Group value={value} options={['One', 'Two', 'Three']} onChange={setValue} />
  );
};

export default Page;
```

## Свойства RadioGroup

<table>
  <thead>
    <tr>
      <th>Название</th>
      <th>Тип</th>
      <th>Значение по умолчанию</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ref</td>
      <td>
        <code>React.Ref&lt;HTMLSpanElement&gt;</code>
      </td>
      <td></td>
      <td>Ссылка для доступа к DOM-узлу компонента.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>
        <code>V</code>
      </td>
      <td></td>
      <td>Значение группы.</td>
    </tr>
    <tr>
      <td>label</td>
      <td>
        <code>React.ReactNode</code>
      </td>
      <td></td>
      <td>Подпись группы.</td>
    </tr>
    <tr>
      <td>hint</td>
      <td>
        <code>React.ReactNode</code>
      </td>
      <td></td>
      <td>Подсказка.</td>
    </tr>
    <tr>
      <td>options</td>
      <td>
        <code>Array&lt;O&gt;</code>
      </td>
      <td></td>
      <td>Список опций.</td>
    </tr>
    <tr>
      <td>optionKey</td>
      <td>
        <code>string | function</code>
      </td>
      <td></td>
      <td>Вычисляет ключ опции (для случая, когда значения опций не уникальны).</td>
    </tr>
    <tr>
      <td>optionContent</td>
      <td>
        <code>string | function</code>
      </td>
      <td></td>
      <td>Вычисляет контент опции.</td>
    </tr>
    <tr>
      <td>optionValue</td>
      <td>
        <code>string | function</code>
      </td>
      <td></td>
      <td>Вычисляет значение опции, возвращаемое при выборе опции (change).</td>
    </tr>
    <tr>
      <td>optionDisabled</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>
        Вычисляет должна ли опция быть отключена (в состоянии <code>disabled</code>).
        <br />
        <br />
        <code>(option: &lt;O&gt;) => boolean</code>
      </td>
    </tr>
    <tr>
      <td>isValueEqualOption</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>
        Функция для определения равенства текущего значения <code>value</code> и опции (для
        определения признака <code>checked</code> у опции).
        <br />
        <br />
        ⚠️ Используйте <code>isValueEqualOption</code> для сравнения <code>value</code> и опции,
        если они в виде объектов или представлены разными типами. По умолчанию они сравниваются с
        помощью <code>Object.is</code>.
        <br />
        <br />
        <code>(value: Nullable&lt;V&gt;, option: &lt;O&gt;) => boolean</code>
      </td>
    </tr>
    <tr>
      <td>className</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>CSS-класс.</td>
    </tr>
    <tr>
      <td>style</td>
      <td>
        <code>React.CSSProperties</code>
      </td>
      <td></td>
      <td>Стиль.</td>
    </tr>
    <tr>
      <td>labelClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>CSS-класс контейнера, в котором располагается текстовая подпись.</td>
    </tr>
    <tr>
      <td>hintClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>CSS-класс hint.</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Компонент отключен (опция не может быть выбрана, получение фокуса запрещено).</td>
    </tr>
    <tr>
      <td>readOnly</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Компонент только на чтение (опция не может быть выбрана).</td>
    </tr>
    <tr>
      <td>block</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Компонент занимает всю ширину контейнера.</td>
    </tr>
    <tr>
      <td>vertical</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Опции располагаются по вертикали.</td>
    </tr>
    <tr>
      <td>required</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>
        Значение должно быть обязательно заполнено (добавляет в label знак обязательности).
      </td>
    </tr>
    <tr>
      <td>asteriskIcon</td>
      <td>
        <code>React.ReactNode</code>
      </td>
      <td>*</td>
      <td>Иконка обязательности заполнения.</td>
    </tr>
    <tr>
      <td>asteriskPosition</td>
      <td>
        <code>'left' | 'right'</code>
      </td>
      <td>
        <code>'right'</code>
      </td>
      <td>Позиция иконки обязательности.</td>
    </tr>
    <tr>
      <td>asteriskClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>
        CSS-класс контейнера, в котором располагается <code>asteriskIcon</code>.
      </td>
    </tr>
    <tr>
      <td>renderIcon</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>
        Отображает иконку радиокнопки.
        <br />
        <br />
        ⚠️ Используйте этот метод для собственной стилизации метки.
        <br />
        <br />
        <code>(props: RenderIconProps&lt;T&gt;) => React.ReactNode</code>
      </td>
    </tr>
    <tr>
      <td>renderOption</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>
        Отображает опцию.
        <br />
        <br />
        ⚠️ Используйте этот метод изменения структуры и стилизации опции (её метки, контента).
        <br />
        <br />
        <code>(props: RenderOptionProps&lt;O&gt;) => React.ReactNode</code>
      </td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>
        Вызывается при выборе значения.
        <br />
        <br />
        <code>
          (value: &lt;V&gt;, event: React.ChangeEvent&lt;HTMLInputElement&gt;) => void
        </code>
      </td>
    </tr>
  </tbody>
</table>

## Примеры

Смотри [storybook](https://github.com/2e32/react-radio-storybook).

## Лицензия

[MIT](https://choosealicense.com/licenses/mit)
