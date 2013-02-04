//-------------------------------------------------------------------------
// Copyright (c) 2000-2010 Digital. All Rights Reserved.
//
// This software is the confidential and proprietary information of
// Digital
//
// Original author: qingang
//
//-------------------------------------------------------------------------
// LOOSOFT MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE SUITABILITY OF
// THE SOFTWARE, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
// TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
// PARTICULAR PURPOSE, OR NON-INFRINGEMENT. UFINITY SHALL NOT BE
// LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING,
// MODIFYING OR DISTRIBUTING THIS SOFTWARE OR ITS DERIVATIVES.
//
// THIS SOFTWARE IS NOT DESIGNED OR INTENDED FOR USE OR RESALE AS ON-LINE
// CONTROL EQUIPMENT IN HAZARDOUS ENVIRONMENTS REQUIRING FAIL-SAFE
// PERFORMANCE, SUCH AS IN THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT
// NAVIGATION OR COMMUNICATION SYSTEMS, AIR TRAFFIC CONTROL, DIRECT LIFE
// SUPPORT MACHINES, OR WEAPONS SYSTEMS, IN WHICH THE FAILURE OF THE
// SOFTWARE COULD LEAD DIRECTLY TO DEATH, PERSONAL INJURY, OR SEVERE
// PHYSICAL OR ENVIRONMENTAL DAMAGE ("HIGH RISK ACTIVITIES"). UFINITY
// SPECIFICALLY DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTY OF FITNESS FOR
// HIGH RISK ACTIVITIES.
//-------------------------------------------------------------------------
package com.gm.machine.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpMethod;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.PostMethod;

import com.gm.machine.contant.Global;

public class CommonUtils
{
    /**
     * 
     * 计算时间差 结果单位 分钟
     * 
     * @since 2011-12-1
     * @author qingang
     * @param one
     * @param two
     * @return
     */
    public static long getDateTimeBetween(Date one, Date two)
    {
        Calendar cone = Calendar.getInstance();
        Calendar ctwo = Calendar.getInstance();
        cone.setTime(one);
        ctwo.setTime(two);
        return ((ctwo.getTimeInMillis() - cone.getTimeInMillis()) / 1000 / 60);

    }

    public static String convertParam(String s)
    {
        return "%" + s + "%";
    }

    /**
     * 
     * 获取当前时间年
     * 
     * @since 2011-7-20
     * @author qingang
     * @return
     */
    public static int getCurrentYear()
    {
        return Calendar.getInstance().get(Calendar.YEAR);
    }

    /**
     * 
     * 获取当前时间月
     * 
     * @since 2012-4-6
     * @author qingang
     * @return
     */
    public static int getCurrentMonth()
    {
        return Calendar.getInstance().get(Calendar.MONTH);
    }

    /**
     * 生成考次前缀
     * 
     * @since 2012-4-6
     * @author qingang
     * @return
     */
    public static String getExamTimesPrefix(String year, String month)
    {

        return (year + (month.length() < 2 ? "0" + month : month)).substring(2);
    }

    /**
     * 
     * 数字字符串不足len位前面补零 (ns:1,len:2 "1"-->"01")
     * 
     * @since 2012-6-19
     * @author qingang
     * @param ns
     * @param len
     *            预定字符串长度
     * @return
     */
    public static String getNumberString(String ns, int len)
    {
        if (ns.length() >= len)
        {
            return ns;
        }
        else
        {
            int i = 0;
            StringBuffer s = new StringBuffer();
            while (i < (len - ns.length()))
            {
                s.append("0");
                i++;
            }
            s.append(ns);
            return s.toString();
        }
    }

    public static String getrannumber()
    {
        StringBuffer strbufguess = new StringBuffer();
        String strguess = new String();
        int[] nums = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        Random rannum = new Random();
        int count;
        int i = 0, temp_i = 0;
        for (int j = 10; j > 4; j--)
        {
            i = 0;
            temp_i = 0;
            count = rannum.nextInt(j);
            while (i <= count)
            {
                if (nums[temp_i] == -1)
                {
                    temp_i++;
                }
                else
                {
                    i++;
                    temp_i++;
                }
            }
            strbufguess.append(Integer.toString(nums[temp_i - 1]));
            nums[temp_i - 1] = -1;
        }
        strguess = strbufguess.toString();
        rannum = null;
        strbufguess = null;
        nums = null;
        return strguess;
    }

    /**
     * 取小数点后两位四舍五入
     * 
     * @param a
     * @return
     */
    public static double getDecimal(double a)
    {
        BigDecimal bd = new BigDecimal(a);
        bd = bd.setScale(3, BigDecimal.ROUND_HALF_UP);
        return bd.doubleValue();
    }

    /**
     * 计算百分比
     * 
     * @param a
     * @param b
     * @return
     */
    public static String getPercent(long a, long b)
    {
        if (b != 0)
        {
            return getDecimal(((double) a / (double) b)) * 100 + "%";
        }
        else
        {
            return "0%";
        }
    }

    /**
     * 
     * 获取当前时间
     * 
     * @since 2012-7-29
     * @author qingang
     * @param format
     * @return
     */
    public static String getCurrentDate(String format)
    {
        return new SimpleDateFormat(format).format(new Date());

    }

    /**
     * 
     * 生成静态页面
     * 
     * @since 2013-1-12
     * @author qingang
     * @param url
     *            需要生成静态页面的链接
     * @param remark
     *            备注
     * @param path
     *            生成后的文件全路径
     * @param encoding
     *            生成后的文件全路径
     * @throws Exception
     */
    public static void createHtmlPage(String url, String remark, String path,
            String encoding) throws Exception
            {
        HttpClient client = new HttpClient();
        HttpMethod httpMethod = new PostMethod(url);

        try
        {
            int returnCode = client.executeMethod(httpMethod);
            if (returnCode == HttpStatus.SC_OK)
            {
                BufferedReader reader = new BufferedReader(
                        new InputStreamReader(httpMethod
                                .getResponseBodyAsStream(), "ISO-8859-1"));
                String tmp = null;
                StringBuffer htmlRet = new StringBuffer();
                while ((tmp = reader.readLine()) != null)
                {
                    htmlRet.append(tmp + "\n");
                }
                writeHtml(path, Global.HMTLPAGE_CHARSET
                        + new String(htmlRet.toString().getBytes("ISO-8859-1"),
                                encoding), encoding);
                System.out.println("生成成功=====================名称：" + remark
                        + "===链接：" + url + "===文件名:" + path + "===生成时间："
                        + getCurrentDate("yyyy-MM-dd HH:mm")
                        + "=======================");
            }
            else
                if (returnCode == HttpStatus.SC_NOT_IMPLEMENTED)
                {
                    System.err
                    .println("The Post method is not implemented by this URI");
                }
        }
        catch (Exception e)
        {
            System.err.println(e);
            System.out.println("生成失败=====================名称：" + remark
                    + "===链接：" + url + "===文件名:" + path + "===生成时间："
                    + getCurrentDate("yyyy-MM-dd HH:mm")
                    + "=======================");
            e.printStackTrace();
            throw e;
        }
        finally
        {
            httpMethod.releaseConnection();
        }

            }

    private synchronized static void writeHtml(String htmlFileName,
            String content, String encoding) throws Exception
            {
        Writer fw = null;

        try
        {
            fw = new BufferedWriter(new OutputStreamWriter(
                    new FileOutputStream(htmlFileName), encoding));
            fw.write(content);
            fw.flush();

        }
        catch (Exception e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        finally
        {
            // 关闭输入输出流
            if (fw != null)
            {
                fw.close();
            }

        }

            }

    /**
     * 将Html页面接收到的数据中的空格，回车，tab等进行转换
     * 
     * @param in
     * @return
     */
    public static String escapeHTMLTags(String in)
    {
        if (in == null)
        {
            return null;
        }
        char ch;
        int i = 0;
        int last = 0;
        char[] input = in.toCharArray();
        int len = input.length;
        StringBuffer out = new StringBuffer();
        while (i < len)
        {
            ch = input[i];
            if (ch == '<')
            {
                if (i > last)
                {
                    out.append(input, last, i - last);
                }
                last = i + 1;
                out.append("&lt;");
                i++;
                continue;
            }
            else
                if (ch == '>')
                {
                    if (i > last)
                    {
                        out.append(input, last, i - last);
                    }
                    last = i + 1;
                    out.append("&gt;");
                    i++;
                    continue;
                }
                else
                    if (ch == '\r')
                    {
                        char chNext = input[i + 1];
                        if ((byte) chNext == '\n')
                        {
                            if (i > last)
                            {
                                out.append(input, last, i - last);
                            }
                            last = i + 1 + 1;
                            out.append("<BR>");
                            i += 2;
                            continue;
                        }
                    }
                    else
                        if (ch == '\n')
                        {
                            if (i > last)
                            {
                                out.append(input, last, i - last);
                            }
                            last = i + 1;
                            out.append("<BR>");
                            i++;
                            continue;
                        }
                        else
                            if (ch == ' ')
                            {
                                if (i > last)
                                {
                                    out.append(input, last, i - last);
                                }
                                last = i + 1;
                                out.append("&nbsp;");
                                i++;
                                continue;
                            }
                            else
                                if (ch == '"')
                                {
                                    if (i > last)
                                    {
                                        out.append(input, last, i - last);
                                    }
                                    last = i + 1;
                                    out.append("&quot;");
                                    i++;
                                    continue;
                                }
                                else
                                {
                                    i++;
                                }
        }
        if (last == 0)
        {
            return in;
        }
        if (i > last)
        {
            out.append(input, last, i - last);
        }
        return out.toString();
    }

    public static void main(String[] args) throws Exception
    {
        System.err.println("--------------" + getNumberString("1", 2));
        // System.out.println("-----------------"+String.valueOf(getCurrentYear()).substring(String.valueOf(getCurrentYear()).length()-2));
    }
}
