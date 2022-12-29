import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Form } from "@atrilabs/react-component-manifests/src/manifests/Form/Form.tsx";
import { useFlex10Cb, useFlex9Cb, useFlex12Cb, useTextBox8Cb, useLink14Cb, useLink15Cb, useLink16Cb, useLink17Cb, useForm1Cb } from "../page-cbs/forms";
import "../page-css/forms.css";
import "../custom/forms";

export default function Forms() {
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

  const Flex10Props = useStore((state)=>state["forms"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["forms"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex9Props = useStore((state)=>state["forms"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["forms"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex12Props = useStore((state)=>state["forms"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["forms"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const TextBox8Props = useStore((state)=>state["forms"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["forms"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const Link14Props = useStore((state)=>state["forms"]["Link14"]);
const Link14IoProps = useIoStore((state)=>state["forms"]["Link14"]);
const Link14Cb = useLink14Cb()
const Link15Props = useStore((state)=>state["forms"]["Link15"]);
const Link15IoProps = useIoStore((state)=>state["forms"]["Link15"]);
const Link15Cb = useLink15Cb()
const Link16Props = useStore((state)=>state["forms"]["Link16"]);
const Link16IoProps = useIoStore((state)=>state["forms"]["Link16"]);
const Link16Cb = useLink16Cb()
const Link17Props = useStore((state)=>state["forms"]["Link17"]);
const Link17IoProps = useIoStore((state)=>state["forms"]["Link17"]);
const Link17Cb = useLink17Cb()
const Form1Props = useStore((state)=>state["forms"]["Form1"]);
const Form1IoProps = useIoStore((state)=>state["forms"]["Form1"]);
const Form1Cb = useForm1Cb()

  return (<>
  <Flex2 className="p-forms Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<TextBox2 className="p-forms TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
<Flex2 className="p-forms Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Link1 className="p-forms Link15 bpt" {...Link15Props} {...Link15Cb} {...Link15IoProps}/>
<Link1 className="p-forms Link16 bpt" {...Link16Props} {...Link16Cb} {...Link16IoProps}/>
<Link1 className="p-forms Link14 bpt" {...Link14Props} {...Link14Cb} {...Link14IoProps}/>
<Link1 className="p-forms Link17 bpt" {...Link17Props} {...Link17Cb} {...Link17IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-forms Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Form className="p-forms Form1 bpt" {...Form1Props} {...Form1Cb} {...Form1IoProps}/>
</Flex2>
  </>);
}
