import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Link } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex7Cb, useFlex6Cb, useFlex8Cb, useTextBox5Cb, useLink10Cb, useLink11Cb, useLink12Cb, useLink13Cb, useButton2Cb, useTextBox6Cb, useTextBox7Cb } from "../page-cbs/aboutme";
import "../page-css/aboutme.css";
import "../custom/aboutme";

export default function Aboutme() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex7Props = useStore((state)=>state["aboutme"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["aboutme"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex6Props = useStore((state)=>state["aboutme"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["aboutme"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex8Props = useStore((state)=>state["aboutme"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["aboutme"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const TextBox5Props = useStore((state)=>state["aboutme"]["TextBox5"]);
const TextBox5IoProps = useIoStore((state)=>state["aboutme"]["TextBox5"]);
const TextBox5Cb = useTextBox5Cb()
const Link10Props = useStore((state)=>state["aboutme"]["Link10"]);
const Link10IoProps = useIoStore((state)=>state["aboutme"]["Link10"]);
const Link10Cb = useLink10Cb()
const Link11Props = useStore((state)=>state["aboutme"]["Link11"]);
const Link11IoProps = useIoStore((state)=>state["aboutme"]["Link11"]);
const Link11Cb = useLink11Cb()
const Link12Props = useStore((state)=>state["aboutme"]["Link12"]);
const Link12IoProps = useIoStore((state)=>state["aboutme"]["Link12"]);
const Link12Cb = useLink12Cb()
const Link13Props = useStore((state)=>state["aboutme"]["Link13"]);
const Link13IoProps = useIoStore((state)=>state["aboutme"]["Link13"]);
const Link13Cb = useLink13Cb()
const Button2Props = useStore((state)=>state["aboutme"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["aboutme"]["Button2"]);
const Button2Cb = useButton2Cb()
const TextBox6Props = useStore((state)=>state["aboutme"]["TextBox6"]);
const TextBox6IoProps = useIoStore((state)=>state["aboutme"]["TextBox6"]);
const TextBox6Cb = useTextBox6Cb()
const TextBox7Props = useStore((state)=>state["aboutme"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["aboutme"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()

  return (<>
  <Flex1 className="p-aboutme Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<TextBox1 className="p-aboutme TextBox5 bpt" {...TextBox5Props} {...TextBox5Cb} {...TextBox5IoProps}/>
<Flex1 className="p-aboutme Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Link className="p-aboutme Link12 bpt" {...Link12Props} {...Link12Cb} {...Link12IoProps}/>
<Link className="p-aboutme Link11 bpt" {...Link11Props} {...Link11Cb} {...Link11IoProps}/>
<Link className="p-aboutme Link13 bpt" {...Link13Props} {...Link13Cb} {...Link13IoProps}/>
<Link className="p-aboutme Link10 bpt" {...Link10Props} {...Link10Cb} {...Link10IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-aboutme Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<TextBox1 className="p-aboutme TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
<TextBox1 className="p-aboutme TextBox6 bpt" {...TextBox6Props} {...TextBox6Cb} {...TextBox6IoProps}/>
<Button1 className="p-aboutme Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex1>
  </>);
}
