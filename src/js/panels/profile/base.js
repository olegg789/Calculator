import React from 'react';

import {
    Group,
    PanelHeader,
    FormItem,
    NativeSelect,
    Div,
    Input,
    IconButton, Button, Header, Card,
} from "@vkontakte/vkui";
import {
    Icon16Clear
} from '@vkontakte/icons';
import {evaluate} from "mathjs";

function ProfilePanelBase({isDesktop, router}) {

    const textInput = React.createRef();
    const clear = () => (textInput.current.value = "");

    function calc() {
        try {
            let from = document.getElementById('from').value;
            let num = document.getElementById('num').value;
            let to = document.getElementById('to').value;

            let test1 = evaluate(num + ' ' + from + ' to ' + to)
            document.getElementById('result').innerHTML = test1
        }
        catch(err) {
            document.getElementById('result').innerHTML = 'ERROR'
        }
    }

    return (
        <>
            <PanelHeader separator={false}>Конвертор</PanelHeader>
            <Div>Позволит перевести из одной единицы измерения в другую</Div>
                <Group mode='card'>
                        <FormItem top="Из...">
                            <NativeSelect id='from' placeholder='Не выбрано'>
                                <option value="cm">Сантиметры</option>
                                <option value="m">Метры</option>
                                <option value="km">Километры</option>
                                <option value='g'>Граммы</option>
                                <option value="kg">Килограммы</option>
                                <option value="ton">Тонны</option>
                                <option value="s">Секунды</option>
                                <option value='minute'>Минуты</option>
                                <option value='hour'>Часы</option>
                                <option value='day'>Дни</option>
                            </NativeSelect>
                        </FormItem>
                        <Div>
                            <Input
                                getRef={textInput}
                                type="number"
                                id='num'
                                placeholder="Введите число..."
                                after={
                                    <IconButton
                                        hoverMode="opacity"
                                        aria-label="Очистить поле"
                                        onClick={clear}
                                    >
                                        <Icon16Clear />
                                    </IconButton>
                                }
                            />
                        </Div>
                        <Div></Div>
                        <FormItem top="В...">
                            <NativeSelect id='to' placeholder='Не выбрано'>
                                <option value="cm">Сантиметры</option>
                                <option value="m">Метры</option>
                                <option value="km">Километры</option>
                                <option value='g'>Граммы</option>
                                <option value="kg">Килограммы</option>
                                <option value="ton">Тонны</option>
                                <option value="s">Секунды</option>
                                <option value='minute'>Минуты</option>
                                <option value='hour'>Часы</option>
                                <option value='day'>Дни</option>
                            </NativeSelect>
                        </FormItem>
                        <Div>
                            <Button size='l' stretched onClick={() => calc()}>Вычислить</Button>
                        </Div>
                </Group>
                <Group header={<Header>Результат</Header>}>
                    <Div>
                        <Card mode='outline' className="result">
                            <Div id='result'></Div>
                        </Card>
                    </Div>
                </Group>
        </>
    );
}

export default ProfilePanelBase;