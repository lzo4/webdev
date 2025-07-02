# 減価償却してくれる関数
def syokyaku():

    try:
        taiyou_year = int(input('耐用年数なんぼじゃい'))
        num = int(input('金額いくら？'))

        syokyaku_rate = 1 / taiyou_year
        syokyaku_num = num*syokyaku_rate
        print(f"減価償却費:{syokyaku_num}です")
    except ZeroDivisionError as e:
        print(e)
        print('0じゃ計算できるわけねえだろうが…ぶっ飛ばすぞ…')
    except ValueError as e:
        print(e)
        print('数字で入れろやテメェこの野郎…')

syokyaku()