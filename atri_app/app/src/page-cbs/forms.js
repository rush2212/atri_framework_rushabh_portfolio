import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useLink14Cb() {

	return {  }
}
export function useLink15Cb() {

	return {  }
}
export function useLink16Cb() {

	return {  }
}
export function useLink17Cb() {

	return {  }
}
export function useTextBox8Cb() {
	const onClick = useCallback(callbackFactory("TextBox8", "forms", "/forms", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex9Cb() {
	const onClick = useCallback(callbackFactory("Flex9", "forms", "/forms", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex10Cb() {
	const onClick = useCallback(callbackFactory("Flex10", "forms", "/forms", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex12Cb() {
	const onClick = useCallback(callbackFactory("Flex12", "forms", "/forms", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useForm1Cb() {
	const onClick = useCallback(callbackFactory("Form1", "forms", "/forms", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}