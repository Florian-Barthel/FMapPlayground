from datetime import datetime
import torch
import os

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

use_decaying_learning_rate = False
use_augmentation = True
use_hard_negative_mining = True
use_bounding_box_regression = True
use_adam_optimizer = True

using_linux = False

image_width = 320
image_height = 320

crop_factor = 0.1
augmentation_probability = 0.15

f_map_rows = 10
f_map_cols = 10


scales = [60, 90, 120, 150, 250]
aspect_ratios = [0.5, 0.75, 1.0, 1.5, 2.0]

scale_factor = 32.0


batch_size = 16
epochs = 1000
validation_interval = 5000

iou = 0.5
nms_threshold = 0.3

negative_example_factor = 10

fg_threshold = 0.3 # 0.9

# TensorBoard logs saved in ./logs/dd-MM-yyyy_HH-mm-ss
current_time = datetime.now()
logs_directory = './logs/' + current_time.strftime('%d-%m-%Y_%H-%M-%S')
detection_directory = 'runs/' + current_time.strftime('%d-%m-%Y_%H-%M-%S') + '/'
validation_directory = '/Users/florian/Desktop/dataset_mmp'
train_dataset = '/Users/florian/Desktop/dataset_mmp/train'
eval_dataset = '/Users/florian/Desktop/dataset_mmp/val'

if not os.path.exists(detection_directory):
    os.makedirs(detection_directory)

# learning_rate = 0.0001
learning_rate = 0.00005 # prev best



