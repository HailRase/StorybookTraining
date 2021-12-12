import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

export type ItemType = {
    title: string
    value: string
}

export type SelectPropsType = {
    value: string
    items: ItemType[]
    setValue: (value: any) => void
}


const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredOption = props.items.find(i => i.value === hoveredElementValue)

    useEffect( () => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onClickSetValue = (value: string) => {
        props.setValue(value)
        setActive(!active)

    }
    const onClickSetActive = (value: boolean) => setActive(value)

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp"){
          for (let i = 0; i < props.items.length; i++) {
              if (props.items[i].value === hoveredElementValue){
                  const pretendentElement = e.key === "ArrowDown"
                      ? props.items[i+1]
                      : props.items[i-1]
                  if (pretendentElement)
                      props.setValue(pretendentElement.value)
                  return;
              }
          }
      }
      if (e.key === "Enter" || e.key === "Escape"){
          setActive(!active)
      }
      props.setValue(props.items[0].value)
    }



    return (
        <div>
            <div onKeyUp={onKeyUp} tabIndex={0} onClick={() => onClickSetActive(!active)} className={s.selectStyle}>
                {selectedItem && selectedItem.title}
                <span style={{float: "right"}}>&#x21D3;</span>
            </div>
            {active &&
            <div className={s.optionalBlock}>{props.items.map(item => <div
                key={item.value}
                className={s.selectOption + " " + (hoveredOption === item ? s.selected : '')}
                onMouseEnter={() => setHoveredElementValue(item.value)}
                onClick={() => onClickSetValue(item.value)}
            >{item.title}</div>)}</div>}
        </div>
    );
};

export default Select;