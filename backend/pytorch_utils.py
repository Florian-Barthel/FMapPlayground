from typing import List

import torch


def check_equal(a: [torch.Tensor, List[torch.Tensor]], b: [torch.Tensor, List[torch.Tensor]]):
    if isinstance(a, list):
        if isinstance(b, list):
            if len(a) != len(b):
                return False
            for i in range(len(a)):
                if not torch.equal(a[i], b[i]) or a[i].grad_fn != b[i].grad_fn:
                    return False
            return True
    if isinstance(a, torch.Tensor):
        if isinstance(b, torch.Tensor):
            return torch.equal(a, b) and a.grad_fn == b.grad_fn
