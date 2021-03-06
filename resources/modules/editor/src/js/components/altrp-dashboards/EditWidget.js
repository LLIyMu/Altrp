import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import WidgetDiagram from "../../../../../admin/src/components/dashboard/WidgetDiagram";
import TypeField from "./fields/TypeField";
import LegendField from "./fields/LegendField";
import SourceField from "./fields/SourceField";
import ColorSchemeField from "./fields/colorSchemeField";

const EditWidget = ({ data, onEdited, setIsEdit, sources }) => {
  const [widget, setWidget] = useState(data);

  const title = useRef(widget.title);

  const onSave = async () => {
    onEdited({
      ...widget,
      title: title.current.value,
    });
    setIsEdit(false);
  };

  const getTypesBySource = (s) => {
    const source = sources.find((item) => s === `/ajax/models/queries/${item.model}/${item.value}`);
    return source?.types?.map((type) => type.value) || [];
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title>Редактировать виджет</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Название виджета</Form.Label>
            <Form.Control type="text" ref={title} defaultValue={widget.title} required />
          </Form.Group>

          <SourceField
            widget={widget}
            setWidget={setWidget}
            sources={sources.map((item) => {
              return { name: item.label, url: `/ajax/models/queries/${item.model}/${item.value}` };
            })}
          />

          <TypeField
            widget={widget}
            setWidget={setWidget}
            allowedTypes={getTypesBySource(widget.source)}
          />

          <ColorSchemeField widget={widget} setWidget={setWidget} />

          <LegendField widget={widget} setWidget={setWidget} />
        </Form>

        <div className="widget-placeholder">
          {widget.source && <WidgetDiagram widget={widget} width={360} height={360} />}
        </div>
      </Card.Body>
      <Card.Footer>
        <Button variant="secondary" onClick={() => setIsEdit(false)}>
          Закрыть
        </Button>
        <Button variant="warning" onClick={onSave} disabled={widget.source === ""}>
          Сохранить изменения
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default React.memo(EditWidget);
