import random
from datetime import datetime

# Generar la fecha y hora actual
current_datetime = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

# Abrir el archivo para escribir las líneas generadas
with open('output.sql', 'w') as file:

    # Primera lista de líneas
    file.write('INSERT INTO `advertisings` (`adv_id`, `adv_com_id`, `adv_title`, `adv_desc`, `adv_price`, `adv_ads_cod`, `adv_cat_cod`, `adv_prl_cod`, `adv_create_date`, `adv_delete_date`, `adv_update_date`) VALUES\n')
    for i in range(1, 7001):
        valor_aleatorio = random.randint(2000, 7000)
        if i == 7000:
            line = f"({i}, 1, 'Prueba titulo aviso {i}', 'Prueba descripcion {i}', {valor_aleatorio}, 1, 1, 2, '{current_datetime}', NULL, '{current_datetime}');"
        else:
            line = f"({i}, 1, 'Prueba titulo aviso {i}', 'Prueba descripcion {i}', {valor_aleatorio}, 1, 1, 2, '{current_datetime}', NULL, '{current_datetime}'),"
        file.write(line + '\n')

    file.write('\n')  # Añadir una línea en blanco entre las listas




    # Segunda lista de líneas
    file.write('INSERT INTO `advertisings_address` (`aad_adv_id`, `aad_adv_com_id`, `add_add_item`) VALUES\n')
    for i in range(1, 7001):
        columna2_aleatoria = random.randint(1, 2)
        columna3_aleatoria = random.randint(1, 3)
        if i == 7000:
            line = f"({i}, {columna2_aleatoria}, {columna3_aleatoria});"
        else:
            line = f"({i}, {columna2_aleatoria}, {columna3_aleatoria}),"
        file.write(line + '\n')

    file.write('\n')  # Añadir una línea en blanco entre las listas






    # Tercera lista de líneas
    file.write('INSERT INTO `advertising_attributes` (`ada_adv_id`, `ada_atr_cod`, `ada_value`) VALUES\n')
    for i in range(1, 7001):
        columna2_aleatoria = random.randint(1, 3)
        if i == 7000:
            line = f"({i}, {columna2_aleatoria}, 'Y');"
        else:
            line = f"({i}, {columna2_aleatoria}, 'Y'),"
        file.write(line + '\n')

    file.write('\n')  # Añadir una línea en blanco entre las listas





    # Cuarta lista de líneas
    file.write('INSERT INTO `advertising_images` (`adi_adv_id`, `adi_item`, `adi_name`, `adi_path`) VALUE\n')
    for i in range(1, 7001):
        if i == 7000:
            line = f"({i}, 1, 'Prueba titulo aviso {i}', 'com_id_2/adv_id_6-adi_item_1.png');"
        else:
            line = f"({i}, 1, 'Prueba titulo aviso {i}', 'com_id_2/adv_id_6-adi_item_1.png'),"
        file.write(line + '\n')

    file.write('\n')  # Añadir una línea en blanco entre las listas




    # Quinta lista de líneas
    file.write('INSERT INTO `advertising_time_settings` (`ats_adv_id`, `ats_day`, `ats_start_1`, `ats_end_1`, `ats_nextday_1`, `ats_start_2`, `ats_end_2`, `ats_nextday_2`) VALUES\n')
    for i in range(1, 7001):
        columna2_valor = (i - 1) // 1000  # Va de 0 a 6 con 1000 líneas para cada número
        if i == 7000:
            line = f"({i}, {columna2_valor}, '00:00:00', '23:59:00', 'N', NULL, NULL, NULL);"
        else:
            line = f"({i}, {columna2_valor}, '00:00:00', '23:59:00', 'N', NULL, NULL, NULL),"
        file.write(line + '\n')
