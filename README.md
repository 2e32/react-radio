# @2e32/react-radio

[Русский (ru)](README.ru.md)

React radio.

## How install

npm

```bash
npm i @2e32/react-radio
```

yarn

```bash
yarn add @2e32/react-radio
```

## Usage Radio

App.js

```javascript
// Once (css import)
import '@2e32/react-radio/css';

const App = () => <Page />;

export default App;
```

Page.js

```javascript
import { useState, useCallback } from 'react';
// Import the component
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

## Props Radio

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ref</td>
      <td>
        <code>React.Ref&lt;HTMLSpanElement&gt;</code>
      </td>
      <td></td>
      <td>Ref to the root element.</td>
    </tr>
    <tr>
      <td>id</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>The id of the input.</td>
    </tr>
    <tr>
      <td>name</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>The name of the input.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>
        <code>T</code>
      </td>
      <td></td>
      <td>The value of the input.</td>
    </tr>
    <tr>
      <td>checked</td>
      <td>
        <code>boolean</code>
      </td>
      <td></td>
      <td>
        If <code>true</code>, the component is checked.
      </td>
    </tr>
    <tr>
      <td>children</td>
      <td>
        <code>React.ReactNode</code>
      </td>
      <td></td>
      <td>The content associated with the radio button (label).</td>
    </tr>
    <tr>
      <td>hint</td>
      <td>
        <code>React.ReactNode</code>
      </td>
      <td></td>
      <td>Hint.</td>
    </tr>
    <tr>
      <td>className</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>The class applied to the root element.</td>
    </tr>
    <tr>
      <td>style</td>
      <td>
        <code>React.CSSProperties</code>
      </td>
      <td></td>
      <td>The style applied to the root element.</td>
    </tr>
    <tr>
      <td>boxClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>The class applied to the mark container.</td>
    </tr>
    <tr>
      <td>inputClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>The class applied to the input.</td>
    </tr>
    <tr>
      <td>labelClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>The class applied to the content container.</td>
    </tr>
    <tr>
      <td>hintClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>The class applied to the hint.</td>
    </tr>
    <tr>
      <td>checkmarkPosition</td>
      <td>
        <code>'left' | 'right' | 'top' | 'bottom'</code>
      </td>
      <td>
        <code>'left'</code>
      </td>
      <td>Checkmark placement.</td>
    </tr>
    <tr>
      <td>checkmarkAlign</td>
      <td>
        <code>'start' | 'center' | 'end'</code>
      </td>
      <td>
        <code>'center'</code>
      </td>
      <td>Checkmark align.</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>If <code>true</code>, the component is disabled (can't be changed and get focus).</td>
    </tr>
    <tr>
      <td>readOnly</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>
        If <code>true</code>, the component is readonly (can't be changed).
      </td>
    </tr>
    <tr>
      <td>autoFocus</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Gets focus when the component is mounted.</td>
    </tr>
    <tr>
      <td>block</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Expands the component to 100% of available space.</td>
    </tr>
    <tr>
      <td>tabIndex</td>
      <td>
        <code>number</code>
      </td>
      <td>
        <code>0</code>
      </td>
      <td>The tabindex of the input.</td>
    </tr>
    <tr>
      <td>renderIcon</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>
        Render radio icon.
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
        Callback fired when the radio button selected by user.
        <br />
        <br />
        <code>
          (value: NonNullable&lt;T&gt;, event: React.ChangeEvent&lt;HTMLInputElement&gt;) => void
        </code>
      </td>
    </tr>
  </tbody>
</table>

## Usage RadioGroup

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

## Props RadioGroup

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ref</td>
      <td>
        <code>React.Ref&lt;HTMLSpanElement&gt;</code>
      </td>
      <td></td>
      <td>Ref to the root element.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>
        <code>V</code>
      </td>
      <td></td>
      <td>The value of the component.</td>
    </tr>
    <tr>
      <td>label</td>
      <td>
        <code>React.ReactNode</code>
      </td>
      <td></td>
      <td>Label.</td>
    </tr>
    <tr>
      <td>hint</td>
      <td>
        <code>React.ReactNode</code>
      </td>
      <td></td>
      <td>Hint.</td>
    </tr>
    <tr>
      <td>options</td>
      <td>
        <code>Array&lt;O&gt;</code>
      </td>
      <td></td>
      <td>Options.</td>
    </tr>
    <tr>
      <td>optionKey</td>
      <td>
        <code>string | function</code>
      </td>
      <td></td>
      <td>Customize option key.</td>
    </tr>
    <tr>
      <td>optionContent</td>
      <td>
        <code>string | function</code>
      </td>
      <td></td>
      <td>Customize option content.</td>
    </tr>
    <tr>
      <td>optionValue</td>
      <td>
        <code>string | function</code>
      </td>
      <td></td>
      <td>Customize option value (change).</td>
    </tr>
    <tr>
      <td>optionDisabled</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>
        Customize option disabled state.
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
        Should the option be in the checked state (compare value and option). if the value and the
        option are equal, then the option is checked.
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
      <td>The class applied to the root element.</td>
    </tr>
    <tr>
      <td>style</td>
      <td>
        <code>React.CSSProperties</code>
      </td>
      <td></td>
      <td>The style applied to the root element.</td>
    </tr>
    <tr>
      <td>labelClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>The class applied to the label container.</td>
    </tr>
    <tr>
      <td>hintClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>The class applied to the hint.</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>If true, the component is disabled (can't be changed).</td>
    </tr>
    <tr>
      <td>readOnly</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>If true, the component is readonly (can't be changed).</td>
    </tr>
    <tr>
      <td>block</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>Expands the component to 100% of available space.</td>
    </tr>
    <tr>
      <td>vertical</td>
      <td>
        <code>boolean</code>
      </td>
      <td>
        <code>false</code>
      </td>
      <td>If true, the options are arranged vertically.</td>
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
        If true, the required icon (<code>asteriskIcon</code>) is displayed.
      </td>
    </tr>
    <tr>
      <td>asteriskIcon</td>
      <td>
        <code>React.ReactNode</code>
      </td>
      <td>*</td>
      <td>Asterisk icon.</td>
    </tr>
    <tr>
      <td>asteriskPosition</td>
      <td>
        <code>'left' | 'right'</code>
      </td>
      <td>
        <code>'right'</code>
      </td>
      <td>Asterisk placement.</td>
    </tr>
    <tr>
      <td>asteriskClassName</td>
      <td>
        <code>string</code>
      </td>
      <td></td>
      <td>
        The class applied to the <code>asteriskIcon</code> container.
      </td>
    </tr>
    <tr>
      <td>renderIcon</td>
      <td>
        <code>function</code>
      </td>
      <td></td>
      <td>
        Render radio button icon.
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
        Render option (icon, content).
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
        Callback fired when the option selected by user.
        <br />
        <br />
        <code>
          (value: &lt;V&gt;, event: React.ChangeEvent&lt;HTMLInputElement&gt;) => void
        </code>
      </td>
    </tr>
  </tbody>
</table>

## Examples

See [storybook](https://github.com/2e32/react-radio-storybook).

## License

[MIT](https://choosealicense.com/licenses/mit)
