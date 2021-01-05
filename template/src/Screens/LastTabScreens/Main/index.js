import React from 'react'
import { Button, Text, View } from 'react-native'
import { useTheme } from '@/Theme'
import useTranslation from '@/Hooks/useTranslation.effect'
import ChangeTheme from '@/Reducers/Theme/ChangeTheme'
import { useDispatch } from 'react-redux'
import { navigateAndSimpleReset } from '@/Navigation/config/Root'
import SignOut from '@/Reducers/User/SignOut'
import useMount from '@/Hooks/useMount.effect'

const Main = ({ navigation }) => {
  const { Fonts } = useTheme()
  const { __, setLanguage } = useTranslation()
  const dispatch = useDispatch()

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(ChangeTheme.action({ theme, darkMode }))
  }
  useMount(() => {
    navigation.setOptions({ title: __('Settings') })
  })
  return (
    <View>
      <Text style={Fonts.textRegular}>{__('dark_mode')} :</Text>
      <Button
        onPress={() => changeTheme({ darkMode: null })}
        title={__('auto')}
      />
      <Button
        onPress={() => changeTheme({ darkMode: true })}
        title={__('dark')}
      />
      <Button
        onPress={() => changeTheme({ darkMode: false })}
        title={__('light')}
      />
      <Text style={Fonts.textRegular}>{__('language')} :</Text>
      <Button onPress={() => setLanguage('en')} title={__('en')} />
      <Button onPress={() => setLanguage('ru')} title={__('ru')} />

      <Button
        onPress={() => {
          navigateAndSimpleReset('PrivateStackNavigator')
          dispatch(SignOut.action())
        }}
        title={__('sign_out')}
      />
    </View>
  )
}

export default Main
