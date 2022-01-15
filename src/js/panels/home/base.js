import React, { useState } from 'react';

import {
    Div,
    Alert,
    Group,
    PanelHeader,
    ScreenSpinner,
    Snackbar,
    Avatar, Card, FixedLayout, Textarea, FormLayoutGroup, FormItem, Button
} from '@vkontakte/vkui'
import {Icon16Done} from '@vkontakte/icons'
import {evaluate} from 'mathjs'

function HomePanelBase({router}) {
    // eslint-disable-next-line
    const [showImg, setShowImg] = useState(false)
    // eslint-disable-next-line
    const [snackbar, setSnackbar] = useState(null)

    // eslint-disable-next-line
    function openAlert() {
        router.toPopout(
            <Alert
                actions={[{
                    title: 'Нет',
                    autoclose: true,
                    mode: 'cancel',
                }, {
                    title: 'Да',
                    autoclose: true,
                    mode: 'destructive',
                    action: () => setShowImg(true)
                }]}
                onClose={() => router.toPopout()}
                header='Вопрос значит'
                text='Вас роняли в детстве?'
            />
        )
    }

    // eslint-disable-next-line
    async function openSpinner() {
        router.toPopout(<ScreenSpinner/>)
        await new Promise(resolve => setTimeout(resolve, 2000))
        router.toPopout()
    }

    // eslint-disable-next-line
    function openSnackbar() {
        setSnackbar(
            <Snackbar
                layout='vertical'
                onClose={() => setSnackbar(null)}
                action='Например кнопка'
                before={
                    <Avatar size={24} style={{ background: 'var(--accent)' }}> 
                        <Icon16Done fill='#fff'/> 
                    </Avatar>
                }
            >
                Какой-то текст
            </Snackbar>
        )
    }

    function print(num) {
        try {
            document.getElementById('num').value += num
        }
        catch(err) {
            console.log(err)
        }
    }

    function calculator() {
        try {
            let data = document.getElementById('num').value;
            document.getElementById('num').value = evaluate(data)
        }
        catch (err) {
            document.getElementById('num').value = "ERROR"
        }
    }

    return (
        <>
            <PanelHeader separator={false}>Калькулятор</PanelHeader>
            <Group>
                <Div>
                    <Card className="Calc" mode="outline">
                        <FixedLayout>
                            <Div>
                                <Textarea
                                    className='calc1'
                                    value=''
                                    id="num"
                                    readOnly
                                />
                            </Div>
                            <Div>
                                <FormLayoutGroup>
                                    <FormItem>
                                        <Button className="btn" size="l" onClick={() => print(1)}>1</Button>
                                        <Button className="btn" size="l" onClick={() => print(2)}>2</Button>
                                        <Button className="btn" size="l" onClick={() => print(3)}>3</Button>
                                        <Button className="btn" size="l" onClick={() => print(' + ')}>+</Button>
                                    </FormItem>
                                    <FormItem>
                                        <Button className="btn" size="l" onClick={() => print(4)}>4</Button>
                                        <Button className="btn" size="l" onClick={() => print(5)}>5</Button>
                                        <Button className="btn" size="l" onClick={() => print(6)}>6</Button>
                                        <Button className="btn" size="l" onClick={() => print(' - ')}>-</Button>
                                    </FormItem>
                                    <FormItem>
                                        <Button className="btn" size="l" onClick={() => print(7)}>7</Button>
                                        <Button className="btn" size="l" onClick={() => print(8)}>8</Button>
                                        <Button className="btn" size="l" onClick={() => print(9)}>9</Button>
                                        <Button className="btn" size="l" onClick={() => print(' * ')}>×</Button>
                                    </FormItem>
                                    <FormItem>
                                        <Button className="btn" size="l" onClick={() => print(' / ')}>÷</Button>
                                        <Button className="btn" size="l" onClick={() => print(0)}>0</Button>
                                        <Button className="btn" size="l" onClick={() => print(' (')}>(</Button>
                                        <Button className="btn" size="l" onClick={() => print(') ')}>)</Button>
                                    </FormItem>
                                    <FormItem>
                                        <Button className="btn" size='l' onClick={() => document.getElementById('num').value = ''}>C</Button>
                                        <Button className="btn" size='l' onClick={() => print('.')}>.</Button>
                                        <Button className="btn1" size="l" onClick={() => calculator()}>Enter</Button>
                                    </FormItem>
                                </FormLayoutGroup>
                            </Div>
                        </FixedLayout>
                    </Card>
                </Div>
            </Group>
        </>
    );
}

export default HomePanelBase;