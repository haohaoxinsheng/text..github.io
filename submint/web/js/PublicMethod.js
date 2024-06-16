
/**
 * 本文件是一个JS工具文件，里面应该有一系列的属性、函数、类。
 */
 
// 本方法主要是验证指定元素的内容是否为空。
function validateEmpty(eleId)//eleID是指元素的ID
	{
		var obj=document.getElementById(eleId);// 取得一个表单元素
	    //var spanObj=document.getElementById(eleId+"Span");// 取得提示信息元素, 优化代码可以在下面的函数需要时取得
	
	    if(obj!=null){
	
				if(obj.value=="")//数据错误
					{
						setFailureStyle(obj);
						return false;// 验证失败
					}else
						{
							setSuccessStyle(obj);
						    return true;// 验证成功
						}
	             }
	          return false;
	}

function formStop(e)
	{
		if(e&&e.preventDefault)
		{
			e.preventDefault();//现行的W3C标准阻止浏览器的默认行为
		}else
			{
				window.event.returnValue=false;//专门针对于IE浏览器的阻止IE浏览器的默认行为
				
			}
		
	}
	
function setSuccessStyle(obj)
{
	obj.className="success"// 设置正确的样式
	var spanObj=document.getElementById(obj.id+"Span");
	if(spanObj!=null)
		{
			spanObj.innerHTML = "<font color='green'>√</font>";
		}

}
function setFailureStyle(obj)
	{
		obj.className="failure";
		var spanObj=document.getElementById(obj.id+"Span");
		if(spanObj!=null)
		{
		spanObj.innerHTML="<font color='red'>×</font>";
		}
	}
 


function validateRegex(eleId,regex)//从外部传入正则
	{
	 if(validateEmpty(eleId))//进行是否为空的验证
		 {
			 var obj=document.getElementById(eleId);// 取得一个表单元素
			 var spanObj=document.getElementById(eleId+"Span");// 取得提示信息元素
			 if(!regex.test(obj.value))//数据错误
					{
						setFailureStyle(obj);
						return false;// 验证失败
					}else
						{
							setSuccessStyle(obj);
						    return true;// 验证成功
						}
		 }
	 return false;
	}


//进行登录密码和确认密码的验证
function validateRepeat(srcId,distId)//密码验证函数，src原始数据，dist要比较的字段id
	{
		var srcObj=document.getElementById(srcId);
		var distObj=document.getElementById(distId);
		
		if(validateEmpty(srcId)&&validateEmpty(distId))//两者都不为空的情况下验证
			{
				
			if(srcObj.value!=distObj.value)//失败
				{
					setFailureStyle(distObj);
					return false;// 验证失败
				}else//成功
					{
						setSuccessStyle(distObj);
					    return true;// 验证成功
					}
			}else
			{
				setFailureStyle(distObj);
				return false;
		    }
	}





	
	