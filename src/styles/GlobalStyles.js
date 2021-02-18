import { StyleSheet } from 'react-native'
import { Colors } from './Colors'

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accentColor,
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    flex: 1,
    backgroundColor: Colors.listBackground,
    padding: 8,
    justifyContent: 'center'
  },
  title: {
    color: Colors.textTitle,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  subtitle: {
    color: Colors.textSubTitle,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 16
  },
  regularText: {
    color: Colors.textTitle,
    fontSize: 16
  },
  textBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    width: '90%',
    borderRadius: 12,
    backgroundColor: Colors.inputTextBg
  },
  iconTextBox: {
    paddingLeft: 8
  },
  textBox: {
    width: '100%',
    paddingHorizontal: 12,
    margin: 0,
    fontSize: 17
  },
  button: {
    elevation: 5,
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginTop: 20,
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center'
  },
  primary: {
    backgroundColor: Colors.primaryColor
  },
  secondary: {
    backgroundColor: Colors.textButton
  },
  disabled: {
    backgroundColor: Colors.disabledButton
  },
  labelButton: {
    color: Colors.textButton,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  primaryLabel: {
    color: Colors.textButton
  },
  secondaryLabel: {
    color: Colors.textTitle
  },
  disabledLabel: {
    color: Colors.textDisabled
  },
  linkContainer: {
    padding: 4
  },
  link: {
    color: Colors.primaryColor,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  iconButton: {
    paddingVertical: 4,
    paddingHorizontal: 16
  },
  floatActionButton: {
    backgroundColor: Colors.primaryColor,
    width: 56,
    height: 56,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 16,
    borderRadius: 29,
    elevation: 10
  },
  right: {
    right: 16
  },
  left: {
    left: 16
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
