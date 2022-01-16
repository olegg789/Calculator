import React, {useState} from 'react';

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

    const [to, setTo] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [start, setStart] = useState(null);
    const textInput = React.createRef();
    const clear = () => (textInput.current.value = "");

    async function onChange() {
        try {
            let data = document.getElementById('start')
            await setStart(data.value)
        }
        catch(err) {
            console.log(err)
        }

    }

    async function unDisabledButton() {
        let data = document.getElementById('to');
        await setTo(data.value);
        await 1;
        setDisabled(false)
    }

    function calc() {
        try {
            let from = document.getElementById('from').value;
            let num = document.getElementById('num').value;
            let to = document.getElementById('to').value;

            let result = evaluate(num + ' ' + from + ' to ' + to);

            document.getElementById('result').innerHTML = result;
        }

        catch(err) {
            document.getElementById('result').innerHTML = 'ERROR'
        }
    }

    return (
        <>
            <PanelHeader separator={false}>Конвертер</PanelHeader>
            <Div>Позволит перевести из одной единицы измерения в другую</Div>
                <Group mode='card'>
                    <FormItem top='Физическая величина'>
                        <NativeSelect id='start' placeholder="Не выбрана" onChange={() => onChange()}>
                            <option value='dlina'>Длина</option>
                            <option value='massa'>Масса</option>
                            <option value='vremya'>Время</option>
                        </NativeSelect>
                    </FormItem>
                    {start === 'dlina' &&
                        <>
                        <FormItem top="Из...">
                            <NativeSelect id='from' placeholder='Не выбрано'>
                                <option value="cm">Сантиметры</option>
                                <option value="m">Метры</option>
                                <option value="km">Километры</option>
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
                            <NativeSelect id='to' placeholder='Не выбрано' onChange={() => unDisabledButton()}>
                                <option value="cm">Сантиметры</option>
                                <option value="m">Метры</option>
                                <option value="km">Километры</option>
                            </NativeSelect>
                        </FormItem>
                        <Div>
                            <Button size='l' disabled={disabled} stretched onClick={() => calc()}>Вычислить</Button>
                        </Div>
                        </>}
                    {start === 'massa' &&
                    <>
                        <FormItem top="Из...">
                            <NativeSelect id='from' placeholder='Не выбрано'>
                                <option value='g'>Граммы</option>
                                <option value="kg">Килограммы</option>
                                <option value="ton">Тонны</option>
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
                            <NativeSelect id='to' placeholder='Не выбрано' onChange={() => unDisabledButton()}>
                                <option value='g'>Граммы</option>
                                <option value="kg">Килограммы</option>
                                <option value="ton">Тонны</option>
                            </NativeSelect>
                        </FormItem>
                        <Div>
                            <Button size='l' disabled={disabled} stretched onClick={() => calc()}>Вычислить</Button>
                        </Div>
                    </>

                    }
                    {start === 'vremya' &&
                    <>
                        <FormItem top="Из...">
                            <NativeSelect id='from' placeholder='Не выбрано'>
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
                            <NativeSelect id='to' placeholder='Не выбрано' onChange={() => unDisabledButton()}>
                                <option value="s">Секунды</option>
                                <option value='minute'>Минуты</option>
                                <option value='hour'>Часы</option>
                                <option value='day'>Дни</option>
                            </NativeSelect>
                        </FormItem>
                        <Div>
                            <Button size='l' disabled={disabled} stretched onClick={() => calc()}>Вычислить</Button>
                        </Div>
                    </>
                    }
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