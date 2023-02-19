from typing import List

import torch


def check_equal(a: [torch.Tensor, List[torch.Tensor]], b: [torch.Tensor, List[torch.Tensor]]):
    if isinstance(a, list):
        if isinstance(b, list):
            for i in range(min(len(a), len(b))):
                if not torch.equal(a[i], b[i]):
                    return False
            return True
    if isinstance(a, torch.Tensor):
        if isinstance(b, torch.Tensor):
            return torch.equal(a, b)
    return False
