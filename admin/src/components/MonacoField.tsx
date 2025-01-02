import { useEffect } from 'react';
import { type FieldValue, type InputProps } from '@strapi/strapi/admin';
import * as monaco from 'monaco-editor';
import initWorkers from '../editor/workers';
import { debounce } from 'lodash';
import { Box, Field } from '@strapi/design-system';
import IStandaloneEditorConstructionOptions = monaco.editor.IStandaloneEditorConstructionOptions;

type MonacoFieldProps = InputProps &
  FieldValue & {
    attribute: {
      options: {
        language: string;
        minimap: boolean;
        required: boolean;
      };
    };
  };

initWorkers();

const MonacoField = (props: MonacoFieldProps) => {
  const { disabled, name, onChange, value, attribute } = props;
  const fieldId = `monaco-field-${name}`;
  const options = attribute.options;
  const language = options.language || 'html';
  // console.log('options', options, required);

  useEffect(() => {
    console.log('creating monaco editor instance');
    const element = document.querySelector(`#${fieldId}`)! as HTMLElement;
    const editorOptions: IStandaloneEditorConstructionOptions = {
      value: value,
      language: language,
      automaticLayout: true,
      readOnly: disabled,
      minimap: { enabled: options.minimap },
    };
    const editor = monaco.editor.create(element, editorOptions);
    const handleChange = debounce(() => {
      onChange(name, editor.getValue());
    }, 500);

    editor.onDidChangeModelContent(handleChange);
  }, []);

  const height = '350px';
  const style = {
    minHeight: height,
    border: '1px solid #dcdce4',
    borderRadius: '4px',
    overflow: 'hidden',
    padding: '0',
  };

  return (
    <Field.Root required={options.required} disabled={disabled}>
      <Field.Label>{name}</Field.Label>
      <Box padding={4} hasRadius={true} style={style}>
        <div id={fieldId} className={'monaco-field-editor'} style={{ height }}></div>
      </Box>
    </Field.Root>
    // <Field.Root required={options.required} disabled={disabled}>
    //   <Field.Label>{name}</Field.Label>
    // <Box padding={4} hasRadius={true} style={style}>
    // </Box>
    // </Field.Root>
  );
};

export default MonacoField;
