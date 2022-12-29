import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useLink10Cb() {

	return {  }
}
export function useLink11Cb() {

	return {  }
}
export function useLink12Cb() {

	return {  }
}
export function useLink13Cb() {

	return {  }
}
export function useFlex6Cb() {
	const onClick = useCallback(callbackFactory("Flex6", "about me", "/about me", "onClick", 
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
export function useTextBox5Cb() {
	const onClick = useCallback(callbackFactory("TextBox5", "about me", "/about me", "onClick", 
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
export function useFlex7Cb() {
	const onClick = useCallback(callbackFactory("Flex7", "about me", "/about me", "onClick", 
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
export function useButton2Cb() {
	const onClick = useCallback(callbackFactory("Button2", "about me", "/about me", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/rush2212",
        "target": "_blank"
      }
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
export function useTextBox6Cb() {
	const onClick = useCallback(callbackFactory("TextBox6", "about me", "/about me", "onClick", 
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
export function useTextBox7Cb() {
	const onClick = useCallback(callbackFactory("TextBox7", "about me", "/about me", "onClick", 
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
export function useFlex8Cb() {
	const onClick = useCallback(callbackFactory("Flex8", "about me", "/about me", "onClick", 
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