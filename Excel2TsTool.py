# Excel转Ts工具
# 全部代码均由GitHub用户Copilot编写(本人辅助)

#pylint: disable=invalid-name
import os

import xlrd


# 读取Excel
def readExcel(file, filePrefix, typeList, mapList, initList):
    # 打开Excel文件
    workbook = xlrd.open_workbook(file)
    # 获取所有sheet
    sheets = workbook.sheet_names()

    # 遍历所有sheet
    for sheet in sheets:
        # 根据sheet索引或者名称获取sheet内容
        worksheet = workbook.sheet_by_name(sheet)
        # 获取总行数
        nrows = worksheet.nrows
        # 获取总列数
        ncols = worksheet.ncols
        # print("nrows %d, ncols %d" % (nrows, ncols))
        # 读取第一行第二列内容
        cell_value = worksheet.cell_value(0, 1)

        # 声明类型 types
        types = "/** %s_DataTableType %s*/\n" % (filePrefix, cell_value)
        types += "type " + filePrefix + "_DataTableType = {"

        # 遍历第三行作为key,第四行作为类型
        for i in range(0, ncols):
            # 获取第三行内容
            key = worksheet.cell_value(2, i)
            # 获取第四行内容
            type = worksheet.cell_value(3, i)
            # 排除等于$的key
            if key == "$":
                continue
            # 拼接ts
            types += " %s: %s," % (key, type)
        # 去掉最后一个逗号
        types = types[:-1]
        types += "}"
        typeList += types + "\n"

        # 新建一个map
        map = "/** %s_DataTableMap %s*/\n" % (filePrefix, cell_value)
        map += "public static %s_DataTableMap:Map<number,%s_DataTableType> = new Map<number,%s_DataTableType>();\n" % (
            filePrefix, filePrefix, filePrefix)
        mapList += map

        # 获取其他行每一列内容
        for j in range(4, nrows):
            if worksheet.cell_value(j, 0) == "#" or worksheet.cell_value(
                    j, 0) == "$":
                continue
            # 声明类型 inits
            inits = ""
            # 声明id
            id = worksheet.cell_value(j, 1)

            inits += "this.%s_DataTableMap.set(%s,{" % (filePrefix, id)

            kv = ""
            for i in range(1, ncols):
                # 获取每一列内容
                value = worksheet.cell_value(j, i)
                key = worksheet.cell_value(2, i)
                # 判定value是否为bool类型
                if value == "true":
                    kv += "%s:true," % (key)
                elif value == "false":
                    kv += "%s:false," % (key)
                elif isinstance(value, str) and i != 1:
                    kv += "%s:\"%s\"," % (key, value)
                else:
                    kv += "%s:%s," % (key, value)
            inits += kv
            inits += "});\n"
            initList += inits
        # 返回,typeList,mapList,initList
        return typeList, mapList, initList


# 读取当前目录下的所有Excel
def readAllExcel():
    # 获取当前目录
    curPath = os.getcwd()
    # 获取当前目录下的所有文件
    files = os.listdir(curPath)

    # 声明一个字符串buff
    buff = ""
    # 声明一个typeList
    typeList = ""
    # 声明一个mapList
    mapList = ""

    # 声明一个initList
    initList = ""

    # 遍历所有文件
    for file in files:
        #获取文件前缀
        filePrefix = os.path.splitext(file)[0]
        # 获取文件后缀
        fileSuffix = os.path.splitext(file)[1]
        # 判断是否是Excel文件
        if fileSuffix == ".xlsx" or fileSuffix == ".xls":
            # 获取readExcel返回的typeList,mapList,initList
            typeList, mapList, initList = readExcel(file, filePrefix, typeList,
                                                    mapList, initList)

    buff += "/*\n* @Author: NoRain\n* @Date: 2023-03-12 20:55:48\n* @Last Modified by:   NoRain\n* @Last Modified time: 2023-03-12 20:55:48\n*/\n"
    buff += typeList
    buff += "/** DataTable数据类 */\n"
    buff += "export default class DataTable {\n"
    buff += mapList
    buff += "/**初始化 */\n"
    buff += "static Init() {\n"
    buff += initList
    buff += "}"
    buff += "}"
    # 把buff以Utf-8写入到DataTable.ts
    with open("DataTable.ts", "w", encoding="utf-8") as f:
        f.write(buff)
    print("转换完成")
    print("什么叫战术拼接大师啊/双手叉腰,后仰,大笑")

readAllExcel()
